rm -rf build/
npm run build

aws s3 sync --profile=mass-uat build/ s3://eea-usersworkspace/home/Cary.FitzHugh/mass-web --acl public-read
