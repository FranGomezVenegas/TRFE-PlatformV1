#!/bin/bash

# Run modify-config.sh
bash deploy.1demo.prod-modifyconfig.sh

# Run another script using sh command
sh publishInBucket-trazit.platform.app.demo
