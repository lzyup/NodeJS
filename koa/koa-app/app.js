const koa = require("koa");
const Router = require("koa-router");
const views = require('koa-views')

//实例化koa
const app = new koa();
const router = new Router();

//应用级中间件(匹配任何路由)
// app.use(async(ctx,next)=>{
//     // console.log(new Date());
//      next(); //当前路由匹配完成以后继续向下匹配

//     if(ctx.status == 404){
//         ctx.status = 404;
//         ctx.body = "这是一个 404 页面"
//     }else{
//         console.log(ctx.url);
//     }
// })

//路由
router.get("/",async ctx=>{
    // ctx.body = {msg:"Hello Koa Interfaces"}
    let title = "你好ejs"
    console.log('11')
    await ctx.render('index',{
        title:title
    })
    console.log(22);
})


//路由级别中间件
router.get("/news", async (ctx,next) => {
    ctx.body = '这是新闻'
    console.log('news')
    next(); //同样匹配到路由完成以后继续向下匹配
})
router.get("/news", async (ctx, next) => {
    ctx.body = '这是新闻11'
})

//动态路由
router.get('/newscontent/:aid',async ctx=>{
    //获取动态路由传值
    console.log(ctx.params);
    ctx.body = '新闻详情';
})

router.get('/newscontent/:aid/page', async ctx => {
    //获取动态路由传值
    console.log(ctx.params);
    ctx.body = '新闻page';
})


/**
 * ejs模板引擎
 */

 //配置模板引擎中间件（第三方中间件）
//  app.use(views('views',{map:{html:'ejs'}}))  //对应后缀名html
app.use(views('views',{
    extension:'ejs'
}))

//配置路由  
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`server started on ${port} `);
});