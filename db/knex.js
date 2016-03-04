// Use the environment set by the environment variable
// NODE_ENV or it will default to 'development'.

// You end up exporting a configured knex module with
// the correct configuration.

var environment = process.env.NODE_ENV || 'development';
var config = require('../config/knexfile.js')[environment];
module.exports = require('knex')(config);