const koa = require('koa');
const path = require('path');
const webpack = require('webpack');
const koaStatic = require('koa-static');
const fs = require('fs');

const devConfig = require('./scripts/dev.config.js');
const middleware = require('./scripts/devmiddleware.js');


const compiler = webpack(devConfig);
const app = new koa();




// error handler
app.use(async (ctx,next)=>{
    try{
        await next();
    }catch(e){
        ctx.body = e.message;
        ctx.status = e.status || 500;
    }

})


// pollyfill for loosing dll files
app.use(async (ctx,next)=>{
    
    if(ctx.path.indexOf('/dll')>-1){
        ctx.type = 'text/javascript';
        ctx.body = fs.readFileSync('./dev/dll/vendor.dll.js','utf8');
    }else{
        next();
    }

});




app.use(middleware.devMiddleware(compiler,{
    watchOptions:{
        aggregateTimeout:300,
        poll: true
    },

    index:"/index.html",

    publicPath:"/",

    stats: {
        colors: true
    },

    lazy:false

}))



// hmr 
app.use(middleware.hotMiddleware(compiler,{
    path:'/__hmr',
    heartbeat: 10 * 1000
}))



// mock






// run
app.listen(9000,()=>{
    console.log('server is listening at 9000...')
})



