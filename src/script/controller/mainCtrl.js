'use strict';

angular.module('elemeApp').controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('data/data.json').then(function (response) {
      	// console.log(response);
      	$scope.seller = response.data.seller;
    	// console.log($scope.seller);
    	// $scope.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    });

}]);