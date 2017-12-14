const webpackMiddleware  = require('webpack-dev-middleware');

module.exports = function(compiler,option={}){
    webpackMiddleware(compiler,option)


    return async (ctx,next)=>{
        await next();
    }

}