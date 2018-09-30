const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLESS = new ExtractTextPlugin('css/common.css');

module.exports = {
	entry: {
		'js/build.js': './src/app.js',
		'css/build': './src/less/common.less'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				loader: 'babel-loader'
			},
			{
				test: /\.less$/,
				use: extractLESS.extract(['css-loader', 'less-loader'])
			}
		]
	},
	output: {
		path: __dirname + '/public/',
		filename: '[name]'
	},
	plugins: [
		extractLESS,
	]
};