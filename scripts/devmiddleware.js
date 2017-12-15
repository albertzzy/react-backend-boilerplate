const webpackMiddleware  = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const PassThrough = require('stream').PassThrough;


function middlewareWrap(mid,req,res){
    const { end: originalEnd } = res;

    return new Promise((resolve)=>{
        res.end = function end() {
            originalEnd.apply(this, arguments);
            resolve(0);
        };
        
        mid(req,res,()=>{
            resolve(1)
        })
    })

}



exports.devMiddleware = function(compiler,option={}){
    const expressmiddleware = webpackMiddleware(compiler,option);

    return async (ctx,next)=>{
        let nextmid = await middlewareWrap(expressmiddleware,ctx.req,{
            end(content) {
              ctx.body = content;
            },
            setHeader() {
              ctx.set.apply(ctx, arguments);
            }
        });

        if(nextmid){
            await next();
        }
    }
}


exports.hotMiddleware = function(compiler,option={}){

    const expressHotmiddleware = webpackHotMiddleware(compiler,option);
    
    return async (ctx, next) => {
        let stream = new PassThrough()

        ctx.body = stream

        await expressHotmiddleware(ctx.req, {
            write: stream.write.bind(stream),
            writeHead: (status, headers) => {
                ctx.status = status
                ctx.set(headers)
            }
        }, next)

    }

   
}   