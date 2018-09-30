const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'js/build.js': './src/app.js'
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
								url: false,
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
			{
				test: /\.(svg|png|jpg|gif|jpeg)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "images/[name].[ext]"
					}
				}
			}
		]
	},
	output: {
		path: __dirname + '/public/',
		filename: '[name]'
	},
	plugins: [
		new ExtractTextPlugin('css/common.css'),
		new HtmlWebpackPlugin()
	]
};