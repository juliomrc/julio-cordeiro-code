# julio-cordeiro-code

Welcome to my personal portfolio website.

## Local set up:

-   npm i
-   npm run start-dev

## Netlify integration

[![Netlify Status](https://api.netlify.com/api/v1/badges/d07adb5f-87f0-4ff2-9d07-bf82c327d3df/deploy-status)](https://app.netlify.com/sites/julio-cordeiro/deploys)

-   [Netlify serverless functions](https://docs.netlify.com/functions/build-with-javascript/)
-   Locally testing serverless functions with [Netlify CLI](https://docs.netlify.com/cli/get-started/)
-   -   Set up: `netlify login`
-   -   Run: `npm run build-prd && netlify dev` (`netlify dev` will grab the contents of dist folder)
-   [Environment variables](https://docs.netlify.com/configure-builds/environment-variables/)
-   [Deployments](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git)
-   -   `npm run deploy` grabs files from generated dist folder on every master push
-   Set up correct [Node & other dependencies versions](https://docs.netlify.com/configure-builds/manage-dependencies/)

## Improvements TODO:

-   Adopt/implement focus trap for the overlay & menu
-   Adopt/implement some fetch library to handle types, error handling, etc.
-   Create "API Types" connection with serverless functions
-   Local hot reload for serverless functions
-   -   `netlify dev` supports functions hot reload, `npm run start-dev` supports js & css hot reload
-   -   (Optionally) Run in parallel to support full hot reload
-   -   Integrate. If necessary, add local and prd domains
