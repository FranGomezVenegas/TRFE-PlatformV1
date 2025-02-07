#!/bin/bash

# Modify properties in config.json using jq
#jq '.dbName = "labplanet" | .isForTesting = "true"   | .releaseDate = now' src/config.json > tmp.json
formatted_date=$(date +"%Y-%m-%d %H:%M")
jq --arg formatted_date "$formatted_date" '.dbName = "labplanet" | .isForTesting = "true" | .releaseDate = $formatted_date' src/config.json > tmp.json

mv tmp.json src/config.json
