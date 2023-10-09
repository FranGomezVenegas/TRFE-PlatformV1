#!/bin/bash

# Run modify-config.sh
bash deploy.1demoV0.9.2.prod-modifyconfig.sh

# Run another script using sh command
sh publishInBucket-demoV0.9.2.app
