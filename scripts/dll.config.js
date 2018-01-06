const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env)=>{
	let output = {},pluginOption = {};

	let dllconfig = {
		resolve: {
			extensions: [".js", ".jsx"]
		},
		entry: {
			vendor:['react','react-router','redux','react-redux','react-dom']
		},
		output: {},
		plugins:[]
	}

	if(typeof env != 'undefined' && env.prod){
		output = {
			path:path.resolve(__dirname,"../dist/dll"),
			filename:"[name].[hash:8].dll.js",
			library:"[name]"
		}

		pluginOption = {
			path: path.resolve(__dirname, "../dist/dll", "[name]-manifest.json"),
			name: "[name]",
			context:__dirname
		};

		dllconfig.plugins.push( new UglifyJsPlugin({
            test:/\.jsx?$/,
            exclude:/(node_modules)/,
            parallel:true
		}))
		
	}else{
		output = {
			path: path.resolve(__dirname,"../dev/dll"),
			filename: "[name].dll.js",
			library:'[name]'
		};

		pluginOption = {
			path: path.resolve(__dirname, "../dev/dll", "[name]-manifest.json"),
			name: "[name]",
			context:__dirname
		};

	}


	dllconfig.output = output;
	dllconfig.plugins.push(new webpack.DllPlugin(pluginOption));

	return dllconfig;

};