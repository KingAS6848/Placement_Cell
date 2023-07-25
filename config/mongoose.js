// Require mongoose for Database
const mongoose = require('mongoose');

// URL used to connect with MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Placement_Cell');


const db = mongoose.connection;

// if any error occur in connection
db.on('error', console.error.bind(`Error in connecting to MongoDB `));


// success message after Sucessfully connnected
db.once('open',function(){
    console.log("server is connected to MongoDB")
});

module.exports = db;