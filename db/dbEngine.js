// Bring Mongoose into the app 
var mongoose = require('mongoose');

// Build the connection string 
var superDB = 'mongodb://127.0.0.1:27017/mmdatabase'; 

// Create the database connection 
mongoose.connect(superDB); 

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + superDB);
}); 
// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 
// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});
// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

/////////////////////////////////////////////////////////////Import Schema Models
require('../db/dataFlow');
