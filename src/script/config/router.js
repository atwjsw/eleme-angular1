'use strict';

angular.module('elemeApp').config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('goods', {
		url: '/goods',
		templateUrl: 'view/goods.html',
		controller: 'goodsCtrl'
	})
	.state('ratings', {
		url: '/ratings',
		templateUrl: 'view/ratings.html',
		controller: 'ratingsCtrl'
	}).state('seller', {
		url: '/seller',
		templateUrl: 'view/seller.html',
		controller: 'sellerCtrl'
	})
	;
	$urlRouterProvider.otherwise('goods');
}]);