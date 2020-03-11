'use strict';
/**
 * adds an new employee
 * Adds an employee to the system
 *
 * addEmployees Employee Employee info to add (optional)
 * no response value expected for this operation
 **/
var config = require('../config.js');
// Require Neo4j
const neo4j = require('neo4j-driver');

// Create Driver
const driver = new neo4j.driver(config.prod.connectionString, neo4j.auth.basic(config.prod.neo4jUsr, config.prod.neo4jPwd));
  

exports.addEmployee = function(addEmployees) {

  // Create Driver session
  const session = driver.session();

  return new Promise(function(resolve, reject) {
    var insertCypher =
    'match (n:Company{name:"Neo4j"}) MERGE (n)-[:has_employee]->(e:Employee {name : $nameParam, emp_id: $idParam }) RETURN e.name AS name, e.emp_id AS id';

      session.run(insertCypher, {'nameParam': addEmployees.name, 'idParam': addEmployees.id})
      .then(result => {
          // On result, get count from first record
          //const count = result.records[0].get('count');
          // Log response
          console.log( result);
          if (Object.keys(result).length > 0) {
            resolve([result.records[0].toObject()]);
          } else {
            resolve();
          }

      })
      .catch(e => {
          // Output the error
          console.log(e);
      })
      .then(() => {
          // Close the Session
          return session.close();
      })
      .then(() => {
          // Close the Driver
          //return driver.close();
      });
  });
}
