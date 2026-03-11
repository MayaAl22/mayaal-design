# Website - mayaal.design

This repository holds the source for the website on [mayaal.design](https://mayaal.design).

## Development

This project uses the NodeJS based [Parcel](https://parceljs.org) build system.
It requires a recent version of [NodeJS](https://nodejs.org).

### Building

The Parcel build system can build a production version of the website and also run a local development server.

Following commands must be run in the cloned local root of the repository.

First, install the necessary dependencies with `npm install`.
The development server can be run with `npm run start`.
It will serve a development version on [localhost](http://localhost:1234).

To build the project for deployment, run `npm run build`.
This will place the build artifacts in the `dist/` directory.

### Deployment

To deploy changes create a feature branch with the changes and create a pull request from it.
After the changes passed the CI pipeline tests they can be merged to the `main` branch.
The latest commit from the `main` branch is automatically deployed.
