Set-Location -Path "C:/Users/fonqp/fonqp.iitkgp.ac.in"
git fetch origin main
git reset --hard origin/main
cd frontend

Write-Host "--- Starting Build ---"

cmd /c "npm install" | Out-Null
cmd /c "npm run build" | Out-Null

Write-Host "--- Build Complete. Zipping... ---"

cd dist
Get-ChildItem -Path . | Compress-Archive -DestinationPath ../dist.zip -Force

cd ..

Write-Host "--- Uploading... ---"
scp ./dist.zip fonqp@academicweb.iitkgp.ac.in:~/

Write-Host "--- Unzipping on Remote... ---"
ssh -n fonqp@academicweb.iitkgp.ac.in "unzip -q -o ./dist.zip"

Write-Host "--- Deployment Success ---"