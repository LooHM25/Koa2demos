var koa = require('koa');
var app = new koa();

app.use(async (ctx, next) => {
    // (1) 进入路由
    var start = new Date;
    await next();
    // (5) 再次进入 x-response-time 中间件，记录2次通过此中间件「穿越」的时间
    var ms = new Date - start;
    // this.set('X-Response-Time', ms + 'ms');
    // (6) 返回 this.body
});

app.use(async (ctx, next) => {
    // (2) 进入 logger 中间件
    var start = new Date;
    await next();
    // (4) 再次进入 logger 中间件，记录2次通过此中间件「穿越」的时间
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(async (ctx, next) => {
    // (3) 进入 response 中间件，没有捕获到下一个符合条件的中间件，传递到 upstream
    this.body = 'Hello World';
    console.log(11111111111)
});


app.listen(3000);