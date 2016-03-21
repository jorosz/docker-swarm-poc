module.exports ={
	notscript: {
		options: {
			destPrefix: 'public/lib/'
		},
		files: {
			"blueimp-gallery/css/blueimp-gallery.min.css": "blueimp-gallery/css/blueimp-gallery.min.css",
			"blueimp-gallery/img": "blueimp-gallery/img",
			'smooth-scroll/css': 'smooth-scroll/css',
			'smooth-scroll/images': 'smooth-scroll/images/*.*',
			'smooth-scroll/images/cursors': 'smooth-scroll/images/cursors',
			'angular-i18n': 'angular-i18n/*locale_@(hu|en|de|fr|cs|pl|it|ru).js',
			"css/" : "jquery-ui/themes/base/minified/jquery-ui.min.css",
			'/': [
				"blueimp-gallery/js/jquery.blueimp-gallery.js", 
				"blueimp-gallery/js/blueimp-gallery.js", 
				"blueimp-gallery/js/blueimp-helper.js",
				'jquery-ui/ui/jquery.ui.effect.js', 
				'jquery-ui/ui/jquery.ui.widget.js', 
				'jquery-ui/ui/jquery.ui.datepicker.js', 
				'jquery-ui/ui/i18n/jquery.ui.datepicker-hu.js', 				
				'jquery.kinetic/jquery.kinetic.js', 
				'requirejs:main', 
				'jquery-mousewheel:main', 
				'jquery:main', 
				'angular:main', 
				'angular-strap:main', 
				'angular-animate:main', 
				'smooth-scroll/js/source/jquery.smoothdivscroll-1.3.js'
			]
		}
	}
};