const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const scripts = require('./config/scripts');
const styles = require('./config/styles');
const extractCSS = require('./config/styles.extract');
const images = require('./config/images');
const surceMap = require('./config/source.map');
const server = require('./config/server');
const extractFavicon = require('./config/favicon.extract');
const extractFonts = require('./config/fonts.extract');
const clear = require('./config/clear');

const directories = {
	source: path.join(__dirname, 'src'),
	distribution: path.join(__dirname, 'public')
};

const main = merge([
	{
		entry: {
			index: directories.source + '/index.js',
		},

		output: {
			path: directories.distribution,
			filename: './js/[name].js'
		},

		target: 'web',

		resolve: {
			extensions: ['.js', '.jsx', '.json', '*']
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: directories.source + '/index.html',
				chunks: ['index'],
				favicon: directories.source + '/favicon.ico'
			}),
		],

		optimization: {
			splitChunks: {
				chunks: 'async',
				name: true
			}
		}
	},

	scripts(),
	images(),
	extractFavicon(),
	extractFonts(directories.source, directories.distribution)
]);

module.exports = function(env, argv) {
	if (argv.mode === 'production') {
		return merge([main, extractCSS()]);
	}
	if (argv.mode === 'development') {
		return merge([main, server(), styles(), surceMap()]);
	}
};
