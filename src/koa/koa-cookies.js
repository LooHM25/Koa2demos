const Koa = require('koa');
const app = new Koa();

const main = function(ctx) {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
}

app.use(main);
app.listen(3000);

/**
 * const Koa  = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.url=== '/index'){
        ctx.cookies.set(
            'cid','hello world',{
                domain:'localhost', // 写cookie所在的域名
                path:'/',       // 写cookie所在的路径
                maxAge: 2*60*60*1000,   // cookie有效时长
                expires:new Date('2018-02-08'), // cookie失效时间
                httpOnly:false,  // 是否只用于http请求中获取
                overwrite:false  // 是否允许重写
            }
        );
        ctx.body = 'cookie is ok';
    }else{
        if( ctx.cookies.get('cid')){
            ctx.body = ctx.cookies.get('cid');
        }else{
            ctx.body = 'Cookie is none';
        }
    }
});

app.listen(3000,()=>{
    console.log('server is starting at port 3000');
})
 */