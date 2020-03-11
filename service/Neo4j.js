'use strict';
/**
 * adds an new employee
 * Adds an employee to the system
 *
 * addEmployees Employee Employee info to add (optional)
 * no response value expected for this operation
 **/

var neo4j = require('neo4j-driver');
var config = require('../config.js');
var driver = neo4j.driver(config.prod.connectionString, neo4j.auth.basic(config.prod.neo4jUsr, config.prod.neo4jPwd));
  
function getSession (){
  var session = driver.session();
  return session;
}

function closeSession (session){
  session.close();
}