var express = require('express');
var fs = require('fs');
var app = express();


//模板引擎
app.set('view engine','ejs');
var multer = require('multer');
// var upload = multer({ dest: 'uploads/' })

var createFolder = function(folder){
    try {
        fs.accessSync(folder);
    } catch (error) {
        fs.mkdirSync(folder);  
    }
}

var uploadFolder = './upload'
createFolder(uploadFolder);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })



app.get('/form',function (req,res) {
    // var form = fs.readFileSync('./form.html',{encoding:'utf8'})
    // res.send(form);   
    let data = {name:'luzy',hobbies:['eating','baskteball']};
    res.render('form', {data:data})
})

app.post('/upload', upload.single('logo'),function(req,res,next) {
    res.send({'ret_code':0})
})



app.listen(3000);