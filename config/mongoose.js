const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/my_contact');

const db=mongoose.connection;

db.on("error",function(error){
    if(error){
        console.log("error occured while making connection to database ", error);
    }
})

db.once('open',function(){
    console.log("Connected to database");
})