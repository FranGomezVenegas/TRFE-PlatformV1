#!/bin/bash

# Run modify-config.sh
bash deploy.1labplanet.testing-modifyconfig.sh

# Run another script using sh command
sh publishInBucket-trazit.platform.app.labplanet.testing
