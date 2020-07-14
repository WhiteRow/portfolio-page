const copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = function(source, dist) {
	return {
		plugins: [
			new copyWebpackPlugin({
				patterns: [
					{
						from: `${source}/assets/fonts`,
						to: `${dist}/assets/fonts`
					}
				]
			})
		]
	};
};
