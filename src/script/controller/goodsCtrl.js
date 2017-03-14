'use strict';

angular.module('elemeApp').controller('goodsCtrl', ['$scope', '$http', '$document', function($scope, $http, $document) {
  $http.get('data/data.json').then(function(response) {
    console.log(response);
    $scope.goods = response.data.goods;
    // console.log($scope.seller);
    $scope.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    // var BScroll = require('better-scroll');
    // console.log($document);
    // console.log($document.find('#foodsWrapper'));
    // console.log(document.getElementById('foodsWrapper'));
    console.log(foodsWrapper);

	// $scope.$watch('$viewContentLoaded', function(){
	$document.ready(function() {
		$scope.foodsScroll = new BScroll(foodsWrapper, {
     		probeType: 1,
      		click: true
    	});

    	console.log($scope.foodsScroll);

		$scope.menuScroll = new BScroll(menuWrapper, {click:true});

    	console.log($scope.menuScroll);

	});
	

    
    // console.log($scope.menuScroll);
  });

}]);
