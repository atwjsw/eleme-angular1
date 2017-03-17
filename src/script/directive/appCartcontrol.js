'use strict';

angular.module('elemeApp').directive('appCartcontrol', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/template/cartcontrol.html',
    scope: {
      food: '=',
      add: '&',
      target: '='
    },
    link: function(scope) {
      scope.addCart = function(event) {
        if (!event._constructed) {
          return;
        }
        event.stopPropagation();
        if (!scope.food.count) {
          scope.food.count = 1;
        } else {
          scope.food.count++;
        }
        // scope.target = event.target;
        // console.log(event.target);
        // scope.add();
        scope.$emit('add', event.target);
      };

      scope.decreaseCart = function(event) {
        if (!event._constructed) {
          return;
        }
        event.stopPropagation();
        if (scope.food.count) {
          scope.food.count--;
        }

      };
    }
  };
}]);

