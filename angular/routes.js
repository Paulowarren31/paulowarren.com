angular.module('routes', []).config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider){

			$routeProvider.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController'
			})
			
			.when('/draw', {
				templateUrl: 'views/draw.html',
				controller: 'DrawController'
			})

			$locationProvider.html5Mode(true);
}]);
