// Require mongoose for Database
const mongoose = require('mongoose');

// URL used to connect with MongoDB
mongoose.connect('mongodb+srv://as684844:abhi2000@placementstore.f2xabqv.mongodb.net/?retryWrites=true&w=majority');


const db = mongoose.connection;

// if any error occur in connection
db.on('error', console.error.bind(`Error in connecting to MongoDB `));


// success message after Sucessfully connnected
db.once('open',function(){
    console.log("server is connected to MongoDB")
});

module.exports = db;