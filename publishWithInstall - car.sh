#!/bin/bash

# Run install.sh to get latest yalc module versions
sh ./install.sh

#demo platform instance
bash deploy.2demoV0.9.2car.prod.sh
bash deploy.2demoV0.9.2car.testing.sh


