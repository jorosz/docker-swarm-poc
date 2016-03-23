requirejs.config({
	paths: {
		"angular": "../components/angular/angular",
		"angular-chart" : "../components/angular-chart.js/dist/angular-chart",
		"chart" : "../components/Chart.js/Chart"
	},
	shim: {
		'angular-strap': ['angular','angular-animate'],
		'angular-strap.tpl': ['angular-strap'],
		'angular-animate': ['angular'],
		angular : {
			exports: 'angular'
		}
	}
});

