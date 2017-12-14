// const koa = require('koa');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddleware  = require('webpack-dev-middleware');

const devConfig = require('./scripts/dev.config.js');
// const devmiddleware = require('./scripts/devmiddleware.js');


const compiler = webpack(devConfig);
// const app = new koa();
const app = express();



// pollyfill for loosing dll files
app.use('/dll',express.static(path.resolve(__dirname,'./dev/dll')));



// error handler
/* app.use(async (ctx,next)=>{
    try{
        await next();
    }catch(e){
        console.log(e)
        ctx.body = e.message;
        ctx.status = e.status || 500;
    }

}) */

// devmiddleware
/* app.use(devmiddleware(compiler,{
    watchOptions:{
        aggregateTimeout:300,
        poll: true
    },

    index:"/index.html",

    publicPath:"/",

    stats: {
        colors: true
    },
})) */

app.use(webpackMiddleware(compiler,{
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
app.use(webpackHotMiddleware(compiler,{
    path:'/__hmr',
    heartbeat: 10 * 1000
}))



// mock






// run
app.listen(9000,()=>{
    console.log('server is listening at 9000...')
})



