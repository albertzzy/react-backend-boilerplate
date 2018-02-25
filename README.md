## issues
[https://github.com/babel/babel/issues/6988](https://github.com/babel/babel/issues/6988)

webpack-dev-middleware 不能用于koa
[http://blog.csdn.net/hsany330/article/details/73505883](http://blog.csdn.net/hsany330/article/details/73505883)


hot reload[https://stackoverflow.com/questions/42286331/how-to-get-react-hot-loader-working-with-webpack-2-and-webpackdevmiddleware](https://stackoverflow.com/questions/42286331/how-to-get-react-hot-loader-working-with-webpack-2-and-webpackdevmiddleware)

react-router Link doesn't work
[https://stackoverflow.com/questions/35821329/react-router-link-doesnt-work](https://stackoverflow.com/questions/35821329/react-router-link-doesnt-work)


file-loader  和 HtmlWebpackPlugin 冲突[https://stackoverflow.com/questions/43494794/webpack-html-webpack-plugin-error-child-compilation-failed#](https://stackoverflow.com/questions/43494794/webpack-html-webpack-plugin-error-child-compilation-failed#)


[https://zhuanlan.zhihu.com/p/21748318](https://zhuanlan.zhihu.com/p/21748318)


ant-design组件的样式加载应该先把全局样式加载，不然回退到一个没有引用任何组件的页面，会受到组件页面带着的全局样式影响。

[https://stackoverflow.com/questions/28223040/window-not-defined-error-when-using-extract-text-webpack-plugin-react#](https://stackoverflow.com/questions/28223040/window-not-defined-error-when-using-extract-text-webpack-plugin-react#)



cpu使用率暴涨至99%
因为设置了webpackMiddleware 的watchOptions的poll 参数设为了true


iconfont 本地化（antd 的iconfont默认引用的是ali cdn的资源）
1. 放弃按需加载，`.babelrc` 里 不设置`style`属性
2. 修改webpack less-loader，分成antd全局样式和其他less 文件分开打包


[https://stackoverflow.com/questions/28223040/window-not-defined-error-when-using-extract-text-webpack-plugin-react](https://stackoverflow.com/questions/28223040/window-not-defined-error-when-using-extract-text-webpack-plugin-react)