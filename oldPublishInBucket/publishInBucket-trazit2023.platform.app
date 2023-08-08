#!/bin/bash
profile='default'
bucket='trazit2023.platform.app'

npm run build
cd build
echo $profile
echo $bucket

aws --profile $profile s3 sync . s3://$bucket --delete --sse AES256 --cache-control no-cache
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "/images/**/*" --include "/data/images/**/*" --recursive --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "/src/config.json" --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800 --content-type application/json
aws --profile $profile s3 cp s3://$bucket/ s3://$bucket/ --exclude "*" --include "*.js" --exclude "pwabuilder-sw.js" --exclude "/utils/**/*" --recursive --metadata-directive REPLACE --sse AES256 --cache-control max-age=604800 --content-type application/javascript