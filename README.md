# mscph.github.io

## Prerequisites
* Docker desktop is installed and running
* Node.js is installed

## Deploy for development

### Run the Docker container for Development
`docker compose up dev`

You can now open the site at http://localhost:3000.

### Remove all containers and images
`docker compose down dev --rmi all --volumes --remove-orphans`

## Deploy for production

### Build the Docker image
`docker compose build`

### Deploy to Github Pages
`npm run deploy`

Changes are deployed at https://mscph.github.io.