'use strict';

angular.module('elemeApp').directive('appStar', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/template/star.html',
    scope: {
      size: '@',
      score: '='
    },
    link: function(scope) {
      	// console.log(scope.size);
      	// console.log(scope.score);
       //  scope.score = 4.49;
      	var LENGTH = 5;
      	var CLS_ON = 'on';
      	var CLS_HALF = 'half';
      	var CLS_OFF = 'off';
      	scope.starType = 'star-' + scope.size;
      	scope.itemClasses = [];
      	var ons = Math.floor(scope.score);
      	var hasHalf = false;
      	if ((scope.score - ons) >= 0.5) {
      	  hasHalf = true;
      	} else {
      	  hasHalf = false;
      	}
      	for (var i = 0; i < ons; i++) {
      	  scope.itemClasses.push(CLS_ON);
      	}
      	if (hasHalf) {
      	  scope.itemClasses.push(CLS_HALF);
      	}
      	while (scope.itemClasses.length < LENGTH) {
      	  scope.itemClasses.push(CLS_OFF);
      	}
        // console.log(scope.itemClasses);   
    }
  };
}]);
