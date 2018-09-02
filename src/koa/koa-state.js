const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

router.use(async (ctx,next)=>{
    //全局的G变量
    ctx.state.G={
        env:'dev',
        appName:'koa-demos'        
    }
   next();
})

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    console.log(ctx.state.G)
    ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());
// 作用:这是官方文档的推荐用法,我们可以看到 router.allowedMethords() 用在 router.routes() 之后,
// 所有,在当所有的路由中间件最后使用.此时根据 ctx.status 设置 response 响应头
app.use(router.allowedMethods());

app.listen(3000);
console.log('app started at port 3000...');