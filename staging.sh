rm -rf build/
npm run build

aws s3 sync --profile=nescaum build/ s3://ma-web-nescaum-ccsc-dataservices --acl public-read
aws cloudfront create-invalidation --profile=nescaum --distribution-id E19XY2FPLOWT0A --paths "/*"
rm -rf build/
echo "https://d11m2g9w3nd649.cloudfront.net"
