var mongoose = require('mongoose');
var gracefulShutdown;
//var dbURI = 'mongodb://localhost/meanAuth';
var dbURI = 'mongodb://a0b37ca8-14a2-4db7-9701-babd82b354b4:2ae65b2a-5646-48fe-bc0c-eb8a30741cd5@75.126.37.69:10239/db';

mongoose.connect(dbURI);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// SCHEMAS & MODELS
require('./users');
