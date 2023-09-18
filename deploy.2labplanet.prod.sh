#!/bin/bash

# Run modify-config.sh
bash deploy.1labplanet.prod-modifyconfig.sh

# Run another script using sh command
sh publishInBucket-trazit.platform.app.labplanet
