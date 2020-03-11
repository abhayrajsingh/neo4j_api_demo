'use strict';

var utils = require('../utils/writer.js');
var CreateAnEmployee = require('../service/CreateAnEmployeeService');

module.exports.addEmployee = function addEmployee (req, res, next) {
  var addEmployees = req.swagger.params['addEmployees'].value;
  CreateAnEmployee.addEmployee(addEmployees)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
