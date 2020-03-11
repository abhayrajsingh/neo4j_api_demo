'use strict';

var utils = require('../utils/writer.js');
var GetAllEmployees = require('../service/GetAllEmployeesService');

module.exports.getEmployees = function getEmployees (req, res, next) {
  GetAllEmployees.getEmployees()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
