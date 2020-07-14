module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(ico)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: './favicon.ico'
							}
						}
					]
				}
			]
		},
	};
};
