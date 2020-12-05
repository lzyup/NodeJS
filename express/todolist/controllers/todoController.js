
var data = [{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];

var bodyParser = require('body-parser');

var urlencodeParse = bodyParser.urlencoded({extended:false});
module.exports = function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data})
        // data.push(req.body);
        // res.json(data);
    })

    app.post('/todo', urlencodeParse, function (req, res) {
        console.log('测试req--->',req.body);
        data.push(req.body);
        res.json(data);
    })

    app.delete('/todo/:item', function (req, res) {
        console.log('req---->',req.params);
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, "_") !== req.params.item;
        })  
        console.log('测试11data--->', data);
        res.json(data);
    })
}