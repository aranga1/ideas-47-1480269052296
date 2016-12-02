var mongoose = require('mongoose');
var gracefulShutdown;
//var dbURI = 'mongodb://localhost/meanAuth';
var dbURI = 'mongodb://3fd738be-956d-4f46-ba35-e7354067d99b:b86a6be0-db94-4416-a7aa-dc93a3864e97@75.126.37.69:10001/db';

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
