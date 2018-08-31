const Koa = require('koa');
const app = new Koa();

// response
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);