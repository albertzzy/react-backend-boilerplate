const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddleware  = require('webpack-dev-middleware');

const devConfig = require('./dev.config.js');


const compiler = webpack(devConfig);
const app = express();



// pollyfill for loosing dll files
app.use('/dll',express.static(path.resolve(__dirname,'../dev/dll')));

app.use(webpackMiddleware(compiler,{
    watchOptions:{
        aggregateTimeout:300,
        poll: 1000
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
app.get('/getlist',(req,res,next)=>{

        res.json({
            success:true,
            data:[
                {
                    name:'aaaa'
                },
                {
                    name:'bbb'
                }
            ]
        })



})



// run
app.listen(9000,()=>{
    console.log('server is listening at 9000...')
})



