module.exports = {
	pwa: {
		name: "My App",
		themeColor: "#4DBA87",
		msTileColor: "#000000",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",
		manifestOptions: {
			display: "fullscreen",
		},
		iconPaths: {
			favicon32: "images/icon/72x72.png",
			favicon16: "images/icon/72x72.png",
			appleTouchIcon: "images/icon/152x152.png",
			maskIcon: "images/icon/72x72.png",
			msTileImage: "images/icon/144x144.png",
		},
		workboxPluginMode: "InjectManifest",
		workboxOptions: {
			swSrc: "src/service-worker.js",
		},
	},
};
