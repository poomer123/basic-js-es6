const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env']
						}
					}
				]
			}
		]
	},
	devServer: {
		port: 8080,
		inline: true,
	}
}