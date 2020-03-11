# Neo4j API Demo

# Client - Simple UI to add & select the employees list
This repo contains `webpack`, `AngularJS`, `ES6` and `Bootstrap 4` component for this UI development.

### Prerequisites
Node >= 6.x.x  node <= 8.x.x, Yarn

### Steps to run project
1. Clone Project.
2. Do `yarn install` to install all dependencies.
3. Finally `yarn start` to run project.

For building project use `yarn build`

# Server Side - APIs for add an employee and get the list

### Steps to run Server program that hosting APIs
1. Using interactive mode `node index.js`
or
2. In background `forever -al neo4j_api_logs.log start index.js`


### Enable Debug with VS Code
Folks, if you want to enable debugging with VSCode then you need to create `launch.json` file and add below two tasks in that file.

```
{
   "type":"node",
   "request":"launch",
   "name":"Debug",
   "program":"${workspaceFolder}/node_modules/webpack-dev-server/bin/webpack-dev-server",
   "args":[
      "--progress",
      "--debug"
   ]
},
{
   "name":"Launch Chrome against localhost, with sourcemaps",
   "type":"chrome",
   "request":"launch",
   "url":"http://localhost:3000",
   "sourceMaps":true,
   "webRoot":"${workspaceRoot}"
}
```

After adding these tasks, you need to run first debug task and then launch chrome task.

### Troubleshooting - 

Please run following command if you will see below error message 
`npm install babel-plugin-angularjs-annotate --save-dev`
`yarn install`
`yarn start`

```
ERROR in ./src/vendor.module.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
ReferenceError: Unknown plugin "angularjs-annotate" specified in "/home/ec2-user/neo4j_demo/neo4j_api/.babelrc" at 1, attempted to resolve relative to "/home/ec2-user/neo4j_demo/neo4j_api"

```
