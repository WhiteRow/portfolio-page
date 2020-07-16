module.exports = function() {
	return {
		devServer: {
			overlay: true,
			port: 3000,
			watchContentBase: true,
			progress: true,
			historyApiFallback: true,
		}
	};
};
