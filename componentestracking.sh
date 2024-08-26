#!/bin/bash

# Archivo de salida
final_versions_file="final-component-versions.txt"
> $final_versions_file # Limpiar el archivo de versiones final

# Leer cada componente desde yalc.lock usando jq
components=$(jq -r '.packages | to_entries[] | "\(.key): \(.value.version)"' yalc.lock)

# Recorrer cada componente y procesar su versión y subcomponentes
while IFS= read -r component; do
    echo "$component" >> $final_versions_file
    
    # Extraer el nombre del componente (sin la versión)
    component_name=$(echo "$component" | cut -d':' -f1)

    # Buscar el archivo component-versions.txt en la carpeta .yalc correspondiente
    component_versions_file_path=".yalc/$component_name/component-versions.txt"
    if [ -f "$component_versions_file_path" ]; then
        while IFS= read -r subcomponent_version; do
            echo "      $subcomponent_version" >> $final_versions_file
        done < "$component_versions_file_path"
    fi
done <<< "$components"
