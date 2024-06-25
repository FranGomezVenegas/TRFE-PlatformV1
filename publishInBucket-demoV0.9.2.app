#!/bin/bash
profile='default'
bucket='demov0.9.2'

# Obtener la fecha actual en formato YYYYMMDD_HHMI
current_date=$(date +"%Y%m%d_%H%M")

# Crear una carpeta temporal para el backup
backup_folder="/tmp/build_$current_date"
mkdir -p $backup_folder

# Crear carpeta de backup en S3 si no existe
aws --profile $profile s3api head-object --bucket $bucket --key "backup/" || aws --profile $profile s3api put-object --bucket $bucket --key "backup/"

# Mover el contenido actual del bucket a una carpeta de backup (excepto la carpeta de backup)
aws --profile $profile s3 mv s3://$bucket/ s3://$bucket/backup/backup_$current_date/ --recursive --exclude "backup/*"

# Verificar la creación de la carpeta de backup
echo "Contenido de la carpeta de backup después de mover el contenido actual:"
aws --profile $profile s3 ls s3://$bucket/backup/backup_$current_date/ --recursive

# Ejecutar la compilación de la nueva versión
npm run build

# Crear la carpeta components_info en el directorio build
build_dir="build"
components_info_dir="$build_dir/components_info"
mkdir -p $components_info_dir

# Crear el archivo de información de versiones y nombres en components_info
version_info_file="$components_info_dir/version_info.txt"
echo "Component Versions and Names:" > $version_info_file

# Agregar nombre y versión del proyecto principal
main_project_name=$(jq -r .name package.json)
main_project_version=$(jq -r .version package.json)
echo "Main Project: $main_project_name, Version: $main_project_version" >> $version_info_file

# Copiar el README del proyecto principal a components_info
if [[ -f "README.md" ]]; then
  cp "README.md" "$components_info_dir/${main_project_name}${main_project_version}readme.md"
fi

# Iterar sobre los componentes en .yalc
yalc_dir=".yalc"
if [[ -d $yalc_dir ]]; then
  for component_dir in $yalc_dir/*; do
    if [[ -d $component_dir ]]; then
      component_name=$(basename $component_dir)
      component_package_json="$component_dir/package.json"
      if [[ -f $component_package_json ]]; then
        component_version=$(jq -r .version $component_package_json)
        echo "Component: $component_name, Version: $component_version" >> $version_info_file

        # Copiar y renombrar el README del componente a components_info
        component_readme="$component_dir/README.md"
        if [[ -f $component_readme ]]; then
          cp "$component_readme" "$components_info_dir/${component_name}${component_version}readme.md"
        else
          echo "No README.md found for component: $component_name"
        fi
      fi
    fi
  done
else
  echo "No .yalc directory found"
fi

# Cambiar a la carpeta build
cd $build_dir

# Subir los nuevos archivos al bucket, reemplazando el contenido anterior en la raíz
aws --profile $profile s3 sync . s3://$bucket --delete --sse AES256 --cache-control no-cache

# Actualizar los metadatos de los archivos específicos
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "/images/**/*" --include "/data/images/**/*" --recursive --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "/src/config.json" --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800 --content-type application/json
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "*.js" --exclude "pwabuilder-sw.js" --exclude "/utils/**/*" --recursive --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800 --content-type application/javascript

echo "Despliegue completado y backup creado en s3://$bucket/backup/backup_$current_date/"
