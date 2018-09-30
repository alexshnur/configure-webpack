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
				test: /\.(le|c)ss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true,
								sourceMap: true
							}
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "fonts/[name].[ext]"
					}
				}
			},
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