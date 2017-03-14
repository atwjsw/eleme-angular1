'use strict';

angular.module('elemeApp').directive('appCartcontrol', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/template/cartcontrol.html',
    scope: {
      food: '='
    },
    link: function(scope) {
      scope.addCart = function(event) {      
        if (!event._constructed) {
            return;
        }
        if (!scope.food.count) {
          scope.food.count = 1;
        } else {
          scope.food.count++;
        }
      };
      scope.decreaseCart = function (event) {
      if (!event._constructed) {
        return;
      }
      if (scope.food.count) {
        scope.food.count--;
      }
    };
    }
  };
}]);
