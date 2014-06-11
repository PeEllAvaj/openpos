var app = angular.module('posControllers', []);

app.controller('HomeCtrl',function($scope, Navigate) {
	$scope.purchases = [];

	$scope.productDB = [
		{name:"Coke",price:2.99,  upc:"04963406"},
		{name:"Water",price:3.99, upc:"06827458"},
		{name:"Fanta",price:2.95, upc:"049000014235"},
		{name:"Coke Zero",price:49.99, upc:"049000042566"}
	];

	$scope.scan = function() {
		console.log("UPC was updated to be " + $scope.UPC);
		if($scope.UPC.length == 8 || $scope.UPC.length == 12) {
			for (var i = $scope.productDB.length - 1; i >= 0; i--) {
				product = $scope.productDB[i];
				if(product.upc == $scope.UPC) {
					$scope.buy(product);
					$scope.UPC = "";
					return;
				}
			};
		} else if ($scope.UPC.length > 12) {
			$scope.UPC = "";
		}

		// At some point in the future, use timeouts to clean the input
		/*
			var keyboardCleanupTimer = setInterval(function () {
	   		$scope.$apply(function() {	
	   			$scope.UPC = "";
	   		});
			}, 5000);
		*/
	}
	$scope.ensureHiddenFocus = function() {
		document.getElementById("importantTypeField").focus();
		$scope.yesReady();
	}

	$scope.notReady = function() {
		$scope.scanStatus =  "Not ready, tap to scan";
	}
	$scope.yesReady = function() {
		$scope.scanStatus = "Ready to scan";
	}

	$scope.refreshPurchaseTotal = function() {
		total = 0;
		for (var i = $scope.purchases.length - 1; i >= 0; i--) {
			total += $scope.purchases[i].price * $scope.purchases[i].quantity;
		};
		
		// BEWARE OF FLOATING POINT MATH FOR CURRENCY!!!!! THIS MIGHT BE OFF A TINY TINY BIT
		$scope.purchaseTotal = total;
		return total;
	}
	$scope.buy = function (product) {
		var newproduct = {}
		newproduct.price = product.price;
		newproduct.quantity = 1;
		newproduct.name = product.name;
		$scope.purchases.push(newproduct);
		
	}


	

	$scope.yesReady();

});

app.controller('LoginCtrl',function($scope, Navigate) {
	$scope.pin = "";
	$scope.tap = function(number) {
		//console.log("Tapped " + 7);
		$scope.pin = parseInt( ($scope.pin + "") + number );
		//console.log($scope);
	}
	$scope.clear = function() {
		$scope.pin = "";
	}

	validPins = [1234,1111,4444];

	$scope.signIn = function() {
		console.log("Checking pin");
		for (var i = validPins.length - 1; i >= 0; i--) {
			valid = validPins[i];
			if($scope.pin == valid) {
				Navigate.goto("/home");
				console.log("login successful.");
				return;
			}
		};
		$scope.error = "Invalid Pin";
		$scope.pin = "";
	}

	$scope.ensureHiddenFocus = function() {
		document.getElementById("importantTypeField").focus();
	}
});