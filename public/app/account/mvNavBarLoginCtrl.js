angular.module('app').controller('mvNavBarLoginCtrl', function($scope){
	$scope.signin = function(username, password) {
		console.log("You have tried to login!");
	};
});
