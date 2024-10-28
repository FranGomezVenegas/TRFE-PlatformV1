# #!/bin/bash

# # Configuración inicial
# yalc_lock_file="yalc.lock"  # Ruta al archivo yalc.lock
# component_versions_file="component-versions.txt"  # Ruta al archivo de salida


# package_version=$(jq -r '.version' package.json)
# # Verificar si se pudo obtener la versión
# if [ -z "$package_version" ]; then
#   echo "Error: No se pudo obtener la versión del package.json."
#   exit 1
# fi

# build_enabled=true  # Variable para activar o desactivar el build (true/false)
# version_suffix=""  # Sufijo para la versión, si se usa sin build

# # Limpiar component-versions.txt antes de generar nuevo contenido
# > "$component_versions_file"

# # Verifica si jq está instalado
# if ! command -v jq &> /dev/null; then
#   echo "Error: jq no está instalado. Por favor, instala jq para continuar."
#   exit 1
# fi

# # Verifica si yalc.lock existe
# if [[ -f $yalc_lock_file ]]; then
#   echo "Generando $component_versions_file basado en $yalc_lock_file..."

#   # Extrae las versiones de yalc.lock y las escribe en component-versions.txt
#   jq -r '.packages | to_entries[] | "\(.key): \(.value.version)"' "$yalc_lock_file" >> "$component_versions_file"

#   echo "$component_versions_file se ha generado correctamente."
# else
#   echo "No se encontró $yalc_lock_file, se omite la generación de versiones."
# fi

# # Verificar si se debe buildear el proyecto
# if [ "$build_enabled" = true ]; then
#   echo "Iniciando el build del proyecto..."
#   if npm run build; then
#     echo "Build completado exitosamente."
#   else
#     echo "Error en el proceso de build. Publicación cancelada."
#     exit 1
#   fi
# else
#   echo "Build deshabilitado, se procede con la publicación sin build."
#   version_suffix=".nobuild"
# fi

# # Publicar la versión en Yalc

# full_version="${package_version}${version_suffix}"

# echo "Publicando el paquete como versión: $full_version"

# if yalc_output=$(yalc publish --push --signature "$full_version"); then
#   echo "Paquete publicado en Yalc como $full_version correctamente."
  
#   # Extraer la versión publicada usando jq (si está en el yalc.lock)
#   published_version=$(jq -r '.packages | to_entries[] | "\(.value.version)"' "$yalc_lock_file" | head -n 1)
  
#   echo "Versión publicada: $published_version"
# else
#   echo "Error al publicar el paquete en Yalc."
#   exit 1
# fi

# # Pausa con información clara para el usuario
# echo "Presiona cualquier tecla para continuar y cerrar la ventana..."
# read -n 1 -s
# echo "Continuando con la ejecución del script..."

#!/bin/bash

# Ruta al archivo yalc.lock
yalc_lock_file="yalc.lock"
# Ruta al archivo de salida component-versions.txt
component_versions_file="component-versions.txt"

# Limpiar component-versions.txt antes de generar nuevo contenido
> "$component_versions_file"

# Verifica si jq está instalado
if ! command -v jq &> /dev/null; then
  echo "Error: jq no está instalado. Por favor, instala jq para continuar."
  exit 1
fi

# Verifica si yalc.lock existe
if [[ -f $yalc_lock_file ]]; then
  echo "Generando $component_versions_file basado en $yalc_lock_file..."

  # Extrae las versiones de yalc.lock y las escribe en component-versions.txt
  jq -r '.packages | to_entries[] | "\(.key): \(.value.version)"' "$yalc_lock_file" >> "$component_versions_file"

  echo "$component_versions_file se ha generado correctamente."
else
  echo "No se encontró $yalc_lock_file, se omite la generación de versiones."
fi

# Ejecutar yalc publish después de generar component-versions.txt
if yalc publish; then
  echo "Paquete publicado en Yalc correctamente."
else
  echo "Error al publicar el paquete en Yalc."
  exit 1
fi
read -n 1 -s
echo "Script ejecutado con éxito."
