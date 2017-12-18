# qualibrate-ui

> qualibrate ui

## Docker image
``` bash
# Container with the required runtime libraries for the UI project
docker pull node:9.3.0

# Cloning the repo
git clone https://github.com/canimus/qualibrate-ui.git

# Moving to root directory
cd qualibrate-ui/

# Running the UI Project in the container
docker run -it --rm -v $PWD:/tmp -p 8080:8080 -w /tmp node:9.3.0 bash -c "npm install && npm run dev"
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
