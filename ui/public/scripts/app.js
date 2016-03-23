define(['angular','angular-chart'], function(angular) {
	
	var myApp = angular.module('dzsoi.swarmpoc', [ "chart.js" ]);
	
	myApp.controller('MainCtrl', ["$scope","$interval","$http",function($scope,$interval,$http) {		
		$scope.options = {
			scaleOvveride: true,
   			scaleSteps: 20,
			scaleStepWidth: 10,
			scaleStartValue: 0,
			scaleBeginAtZero: true,
			animation: false,
			barValueSpacing: 0
		};
		
	    $scope.series = ['Throughput'];
	    $scope.labels = [];
	    $scope.data = [[]];

		refresh = function() {
			$http.get('/api/chartData').then(function ok(response) {
				$scope.labels = [];
				$scope.data = [[]];
				
				angular.forEach(response.data,function(chartData) {
					$scope.labels.push(chartData.date);
					$scope.data[0].push(chartData.tps);	
				});
			}, function error(response) {
				$scope.error = response;
			})
		};
		$interval(refresh, 3000);
		refresh();
	}]);
	
	return myApp;
	
});