var express = require('express');


var app = express();

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user')

app.use(express.static('public'));
// 没有挂载路劲的中间件，应用的每个请求都会执行该中间件
// app.use(function(req,res,next){
//     console.log('first middleware')
//     next();
//     console.log('3')
// })

// app.get('/',function(req,res,next){
//     res.send('ok')
//     console.log('ok')
// })

app.use('/',indexRouter);
app.use('/users',userRouter);

app.listen(3000);