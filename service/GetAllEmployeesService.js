'use strict';


/**
 * Get the all employees list
 * Get the all employees list from Neo4J
 *
 * returns List
 **/
var config = require('../config.js');
// Require Neo4j
const neo4j = require('neo4j-driver');

// Create Driver
const driver = new neo4j.driver(config.prod.connectionString, neo4j.auth.basic(config.prod.neo4jUsr, config.prod.neo4jPwd));
  

exports.getEmployees = function() {

  // Create Driver session
  const session = driver.session();

  return new Promise(function(resolve, reject) {

    var selectCypher =
    'match (e:Employee) RETURN e.name AS name, e.emp_id AS id';

    session.run(selectCypher)
    .then(result => {
        // On result, get count from first record
        //const count = result.records[0].get('count');
        // Log response
        console.log( result);
        if (Object.keys(result).length > 0) {
          var response = [];
          result.records.forEach(element => response.push(element.toObject()));
          resolve(response);
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
