const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const dev = process.env.NODE_ENV === "dev";


let config = {
	entry: "./app/index.js",
	watch: dev,
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{ // Babel es6->es5
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			}
		]
	},
	plugins: [
		
	]
};

if (!dev) {
	config.plugins.push(new UglifyJSPlugin())
}

module.exports = config;