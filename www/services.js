var services = angular.module('posServices', ['ngResource']);


services.factory("Navigate", function($rootScope, $location) {
	var navigator = 
			{goto: function(dest) {
				//console.log("Location.path was " +  $location.path() + " and dest is " + dest);
				//console.log("topBarTools is " + this.topBarTools);
				
				$location.path(dest);
				//navigator.setTools([]);
				//console.log("Analytics: Tracked a visit to " + dest)
				//Analytics.sendAppView(dest);

				}
			};
	return navigator;

});
