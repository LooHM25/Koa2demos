const Koa = require('koa');
const app = new Koa();

// response
app.use(async ctx => {
    //  ctx.throw(500,"wrong");

    ctx.response.status = 404;
    ctx.response.body = 'Page Not Found';
});

app.listen(3000);