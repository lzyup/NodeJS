//测试koa中间件执行顺序
const koa = require("koa");
const Router = require("koa-router");

//实例化koa
const app = new koa();
const router = new Router();

//应用级中间件(匹配任何路由)
app.use(async (ctx, next) => {
    console.log('1、这是第一个中间件')
    next(); //当前路由匹配完成以后继续向下匹配
    console.log('5、匹配路由完成以后又会返回来执行中间件')
})

app.use(async (ctx,next)=>{
    console.log('2、这是第二个中间件')
    next();
    console.log('4、匹配到路由完成以后又会返回来执行中间件')
})

//路由



//路由级别中间件
router.get("/news", async (ctx, next) => {
    console.log('3、匹配到了news这个路由')
    ctx.body = '这是新闻'

    next(); //同样匹配到路由完成以后继续向下匹配
})
router.get("/news", async (ctx, next) => {
    ctx.body = '这是新闻11'
})




//配置路由  
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server started on ${port} `);
});