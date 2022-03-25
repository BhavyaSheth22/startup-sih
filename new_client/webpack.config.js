module.exports = {
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		fallback: {
			http: require.resolve("stream-http"),
			http: require.resolve("stream-http"),
			crypto: require.resolve("crypto-browserify"),
			assert: require.resolve("assert/"),
			https: require.resolve("https-browserify"),
			url: require.resolve("url/"),
			os: require.resolve("os-browserify/browser"),
		},
	},
};
