rm -rf build/
npm run build

aws s3 sync --profile=nescaum build/ s3://ma-web-nescaum-ccsc-dataservices --acl public-read
rm -rf build/
