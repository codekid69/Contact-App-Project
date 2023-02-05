const { query } = require('express');
const express=require('express');
const port=8000;
const path=require('path');
const db=require('./config/mongoose');
const contact=require('./model/contact')
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('./static'));
app.use(express.urlencoded());
let contacList=[
    {
        name:'yash',
        phone:8860643975
    },
    {
        name:'xyz',
        phone:88643975
    }
]
app.get('/',function(req,res){
   contact.find({},function(error,contacts){
        if(error){
            console.log("Error",error); 
            return;
        }
        return res.render('home',{
            title:'My contact App',
            contact_list:contacts
        });
   })
})

app.post('/add-contact',function(req,res){
   contact.create(
    {
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('back');
    }
   )
});
app.get('/delete-contact',function(req,res){
    let id=req.query.id;
   contact.findByIdAndDelete(id,function(error){
    if(error){
        console.log(error);
        return;
    }
    return res.redirect('back');
   })
})
app.listen(port,function(error){
    if(error){
        console.log(error,"Problem in running server");
        return;
    }
    return console.log("Server running on port ",port);
})