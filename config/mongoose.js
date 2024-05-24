const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/easysafar');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongoDB"));

db.once('open', function(){
   console.log('Connected to mongodb');
})

module.exports = db;