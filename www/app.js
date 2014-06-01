var posApp = angular.module('posApp', [
	'ngRoute',
	'posControllers',
	'posServices'
]);
 
posApp.config(['$routeProvider',
  function($routeProvider) {
	
	$routeProvider.
	  when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	  }).
	  when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	  }).
	  otherwise({
		redirectTo: '/login'
	  });
  }]);
