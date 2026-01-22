Set-Location -Path "C:/Users/fonqp/fonqp.iitkgp.ac.in"
git pull origin main
cd frontend
npm install
npm run build
cd dist
Compress-Archive -Path * -DestinationPath ../dist.zip -Force
cd ..
scp ./dist.zip fonqp@academicweb.iitkgp.ac.in:~/
ssh fonqp@academicweb.iitkgp.ac.in "unzip -o ./dist.zip"
