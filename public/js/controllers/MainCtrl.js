angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	$scope.tagline = 'To the moon and back!';

    $http.get('getThisWeeksGames').then(successCallback, errorCallback);

	function successCallback(response) {
		console.log("Success");
	}
	function errorCallback(error) {
    	console.log("Error");
	}

});