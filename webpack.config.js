module.exports = {
	entry: {
		'js/build.js': './src/app.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		path: __dirname + '/public/',
		filename: '[name]'
	}
};