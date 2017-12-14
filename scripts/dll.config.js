const webpack = require('webpack');
const path = require('path');


module.exports = {
	resolve: {
		extensions: [".js", ".jsx"]
	},
	entry: {
		vendor:['react','react-router','redux','react-redux','react-dom']
	},
	output: {
		path: path.resolve(__dirname,"../dev/dll"),
		filename: "[name].dll.js",
		library:'[name]'
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.resolve(__dirname, "../dev/dll", "[name]-manifest.json"),
			name: "[name]",
			context:__dirname
		})
	]
};