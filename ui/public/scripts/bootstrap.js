require(['config'], function() {
	
	require(['angular','app'], function(angular,app) {
	
		/*
		// Can also include an i18n script
		var lang=document.documentElement.lang;
		var langfile='/components/angular-i18n/angular-locale_' + lang + '.js';
		require(['require',langfile], function(require) {
		require(langfile);
		});
		*/
	
		angular.bootstrap(document.querySelector('body'), [app.name]);
		window.myApp=app; // should be for debug only
	
	});
});