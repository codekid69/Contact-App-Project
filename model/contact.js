const mongoose= require('mongoose');

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const Contacts=mongoose.model('Contacts',schema);

module.exports=Contacts;