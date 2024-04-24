# www.blissri.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/dce3f8af-d6a9-4fc0-b573-6ab0940a6ade/deploy-status)](https://app.netlify.com/sites/thriving-kataifi-2b287f/deploys)

## Overview

This is the frontend repo for the [BlissRI website](https://www.blissri.com) built with [Greenwood](https://www.greenwoodjs.io/).🏃‍♂️

## Setup

After cloning the repo, do the following to get up and running
1. Install [NodeJS](https://nodejs.org/en/) (LTS) or run [`nvm use`](https://github.com/nvm-sh/nvm)
1. Run `npm ci`

## Development

See _package.json_ for all options:
- `npm run dev` - Start a local development server with file watching, live reload, etc
- `npm run serve` - Build the site for production and start a server locally (useful for a local demo)
- `npm run test:tdd` - Run tests in watch mode
- `npm run story:dev` - Run Storybook for development


## Release Management

The project is hosted by [Netlify](https://www.netlify.com/) and is setup to deploy continuously on every merge to the mainline branch in GitHub.  [GitHub Actions](https://github.com/features/actions) are used for continuous integration on PRs and Netlify will deploy preview builds for all PRs.