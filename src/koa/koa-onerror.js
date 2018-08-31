const fs = require('fs');
const koa = require('koa');
const onerror = require('koa-onerror');
 
const app = new koa();
 
onerror(app);
 
app.use(ctx => {
  // foo();
  ctx.body = fs.createReadStream('not exist');
});
app.listen(3000);