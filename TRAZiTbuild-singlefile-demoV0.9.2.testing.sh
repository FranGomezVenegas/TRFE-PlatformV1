#!/bin/bash
profile='default'
bucket='demov0.9.2.testing'
isForTesting=true
dbName='demo_v0_9_2'

# Actualizar el archivo config.json con bucketName y versionInfoPath
version_info_path="components_info/version_info.txt"
formatted_date=$(date +"%Y-%m-%d %H:%M")
jq --arg bucketName "$bucket" \
   --arg versionInfoPath "$version_info_path" \
   --arg formatted_date "$formatted_date" \
   --arg dbName "$dbName" \
   --argjson isForTesting "$isForTesting" \
   '.bucketName = $bucketName | .versionInfoPath = $versionInfoPath | .releaseDate = $formatted_date | .dbName = $dbName | .isForTesting = $isForTesting' \
   src/config.json > tmp_config.json

mv tmp_config.json src/config.json

# Subir el archivo config.json actualizado al bucket
# aws --profile $profile s3 cp src/config.json s3://$bucket/src/config.json --sse AES256 --cache-control max-age=604800 --content-type application/json

# Obtener la fecha actual en formato YYYYMMDD_HHMI
current_date=$(date +"%Y%m%d_%H%M")

# Crear una carpeta temporal para el backup
backup_folder="/tmp/build_$current_date"
mkdir -p $backup_folder

# Crear carpeta de backup en S3 si no existe
aws --profile $profile s3api head-object --bucket $bucket --key "backup/" || aws --profile $profile s3api put-object --bucket $bucket --key "backup/"

# Mover el contenido actual del bucket a una carpeta de backup (excepto la carpeta de backup)
aws --profile $profile s3 mv s3://$bucket/ s3://$bucket/backup/backup_$current_date/ --recursive --exclude "backup/*"

# Verificar la creaci�n de la carpeta de backup
echo "Contenido de la carpeta de backup despu�s de mover el contenido actual:"
aws --profile $profile s3 ls s3://$bucket/backup/backup_$current_date/ --recursive

# Ejecutar la compilaci�n de la nueva versi�n
npm run build

# Crear la carpeta components_info en el directorio build
build_dir="build"
components_info_dir="$build_dir/components_info"
mkdir -p $components_info_dir

# Crear el archivo de informaci�n de versiones y nombres en components_info
version_info_file="$components_info_dir/version_info.txt"
echo "Component Versions and Names:" > $version_info_file

# Agregar nombre y versi�n del proyecto principal
main_project_name=$(jq -r .name package.json)
main_project_version=$(jq -r .version package.json)
echo "Main Project: $main_project_name, Version: $main_project_version" >> $version_info_file

# Copiar el README del proyecto principal a components_info
if [[ -f "README.md" ]]; then
  cp "README.md" "$components_info_dir/${main_project_name}${main_project_version}readme.md"
fi

# Leer y agregar informaci�n de yalc.lock a version_info.txt
yalc_lock_file="yalc.lock"
if [[ -f $yalc_lock_file ]]; then
  echo "Yalc.lock Components:" >> $version_info_file
  jq -r '.packages | to_entries[] | "\(.key): \(.value.version)"' $yalc_lock_file >> $version_info_file
else
  echo "No yalc.lock file found"
fi

# Cambiar a la carpeta build
cd $build_dir

# Subir los nuevos archivos al bucket, reemplazando el contenido anterior en la ra�z
aws --profile $profile s3 sync . s3://$bucket --delete --sse AES256 --cache-control no-cache

# Actualizar los metadatos de los archivos espec�ficos
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "/images/**/*" --include "/data/images/**/*" --recursive --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "/src/config.json" --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800 --content-type application/json
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "*.js" --exclude "pwabuilder-sw.js" --exclude "/utils/**/*" --recursive --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800 --content-type application/javascript



echo "Despliegue completado y backup creado en s3://$bucket/backup/backup_$current_date/"
