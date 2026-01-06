# services

Digital Infrastructure Backbone for Advanced Photonics Laboratory, IIT Kharagpur

> [!WARNING]
> Private repository. Do not share the contents of this repository without permission. Contains IIT Kharagpur confidential information.

## Structural Overview
The repository is setup using Astral [uv](https://docs.astral.sh/uv/) manager. services is divided into backend and frontend as follows:
```rust
services
 ├── src
     ├── services
         ├── backend
         └── frontend
             ├── data (update this folder for regular content updates)
             ├── public (put files and images here)
             ├── pages (update or add new pages here)
             └── components (update or add new components here)
 
```

The backend is used to deal with services related to connecting model inference pipelines to GPUs, user sessions and shared spaces.

The frontend is where the website code lies. The frontend/src/data folder is where regular updates should be made.

## If you want to contribute
Install latest npm, nodejs, git and [uv](https://docs.astral.sh/uv/) in your local PC.

- Make changes in the **data** folder. (direct commits are allowed for minor changes and additions to data files only)
- Create a pull request for major changes.

Till here the changes are only reflected in this GitHub repository. To reflect the changes in the live website, we will have to upload this to the server.

Run the following commands from the root of the repository to create a zip file of the build folder:
```
npm run build
cd src/services/frontend/
zip -r dist.zip dist/*
```

This will be uploaded to the server.

The server is physically present in the CIC building and we can access it through the lab PC with IPv4 address 10.7.11.13 only (currently Monica Pradhan's PC).

The steps to upload the changes to the server are as follows:
1. SCP the dist.zip file to the server using the command `scp dist.zip fonqp@academicweb.iitkgp.ac.in:~/`
2. SSH into the server using the command `ssh fonqp@academicweb.iitkgp.ac.in`
3. The home directory is the base folder of the website.
4. Unzip the dist.zip file using the command `unzip dist.zip`

This should update the website with the new changes.

#### Useful Files
- [frontend page template](./src/services/frontend/src/pages/template.jsx)
- [pictures](./src/services/frontend/public/)

***