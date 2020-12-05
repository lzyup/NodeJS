var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.get('/',function(req,res){
    let object = {
        name:"121212"
    }
    res.send(object);
})

//app.use(bodyParser.urlencoded({extended:false}))

//app.use(bodyParser.json())

var jsonParser = bodyParser.json();


app.post('/',jsonParser,function (req,res) {
    
})

//http://localhost:3000/profile/0101/user/luzy?find=me
app.get('/profile/:id/user/:name',function(req,res) {
    console.log('id--->',req.params.id); //0101
    console.log('query-->',req.query.find); // me
    
})

app.listen(3000);