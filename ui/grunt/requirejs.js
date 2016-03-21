module.exports ={
	options: {
		out: 'www/scripts/bootstrap.js',
		appDir: 'public',
		dir: 'www',
		mainConfigFile: 'public/scripts/config.js',
		include: ['bootstrap']
	},
	// Specific options for prod
	prod: {
		options: {
			removeCombined: true,
			optimize: 'uglify2',
			uglify2: {
				mangle: false
			},	
			generateSourceMaps: false,			
			preserveLicenseComments: true
		}
	},
	// Specific options for development - we have source maps and no compression
	dev: {
		options: {
			optimize: 'none',
			generateSourceMaps: true,
			preserveLicenseComments: false
		}
	}	
};