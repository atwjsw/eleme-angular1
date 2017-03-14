'use strict';

angular.module('elemeApp').directive('appHeader', [function() {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: 'view/template/header.html',
		scope: {
			seller: '='
		},
		link: function(scope) {
			scope.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
			scope.showDetail = function () {
    			scope.detailShow = true;
    		};
    		scope.hideDetail = function () {
      			scope.detailShow = false;
    		};
		}
	};
}]);