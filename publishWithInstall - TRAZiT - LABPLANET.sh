#!/bin/bash

# Run install.sh to get latest yalc module versions
sh ./install.sh

#demo platform instance
#bash deploy.2demo.prod.sh
#bash deploy.2demo.testing.sh

#labplanet platform instance
bash deploy.2demoV0.9.2.prod.sh     
bash deploy.2demoV0.9.2.testing.sh
