const Path= require('path');

module.exports= {
	entry: './client/app',
	output: {
		filename: 'bundle.js',
		path: Path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /.\js/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
				}
			}
		]
	},
	mode: 'development'
}	
