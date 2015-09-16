app.controller('customersCtrl', function($scope, $http) {
	$http.get("/json/document1.json")
	.success(function (response) {
		$scope.names = response.records;
	});
});