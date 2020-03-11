'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');

var bodyParser = require('body-parser')
var express = require('express');
//var app = require('connect')();
var cors = require('cors')
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 8080;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
// parse application/json
app.use(bodyParser.json())

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};



//Swgger initialation
app.all("/*", function(req, res, next) {
  if (req.method.toLowerCase() !== "options") {
    return next();
  }
  return res.send(400);
});

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('API\'s information is available on http://localhost:%d/docs', serverPort);
  });

});
