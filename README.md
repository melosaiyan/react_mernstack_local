This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# My MERNSTACK Project (Using MongoDB, Express.js/Axios, React, & Node.js)

## This app is based on the MERN Stack tutorial linked below

https://www.positronx.io/react-mern-stack-crud-app-tutorial/

## Some PSAs

### Node.js and NPM required!

Duh. Have at least Node 10+ and NPM 6.x

### This project is Docker-ready

If wanting to run a standard Node.js server, update `backend/database/db.tsx` to use `localhost` or an IP address.

### MongoDB

MongoDB is required to get this project to run. I used docker to get a MongoDB instance (standard node deployment and standalone docker deployment ONLY):

`docker run --name mern-mongodb -d mongo:4.4.1`

### MongoDB IP Address in Docker

Update `backend/database/db.tsx` with correct hostname. To find IP address:

`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mern-mongodb`

## To Deploy This App

First, create the node_modules for the root and the `backend` directory:

`npm i && cd backend && npm i`

### Docker edition

The project is ready to be deployed via Docker. Best results with Docker-Compose. There are a couple options for Dockerfile, Dockerfile.centos and Dockerfile.rhel. centos uses a centos base image and rhel uses a rhel8 base image (requires redhat subscription). Default is rhel.

To run via Docker-Compose, bring up mongodb first:

`docker-compose up -d mongo`

Then bring up the node app:

`docker-compose up web`

NOTE: If running on a remote server, update the `docker-compose.yml` file and update environment variables!

This project can be run with just Docker as well (may need to verify if port 4000 needs exposed)

`docker build -t mernstack:dev .`

Then create a new node instance (the -v option mounts to local codebase and the -e option checks for any changes to codebase; ideal for development. Leave both options out if just wanting a regular container):

`docker run -it --rm  -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true -e REACT_APP_MONGO_URL=mongodb://mongo:27017 - e REACT_APP_HOSTNAME=http://localhost:4000 mernstack:dev`

### Standard edition

To run with just node, set environment variables for `REACT_APP_MONGO_DB` and `REACT_APP_HOSTNAME` to match the environment you're in (e.g. in a linux system, do `export REACT_APP_HOSTNAME=https://localhost:4000 && export REACT_APP_MONGO_DB=mongodb://mongo:27017`; in Windows, search for `Edit Environment Variables` and add variable and value). After having a mongodb instance running (local install or docker container), then run the following command:

`npm run node-app`

### TODOs

* Find easy way to set environment variables for standard node.js deployment (use .env file?)
* Add HTTPS support (works in Openshift without changing code)


# Standard React README info

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify