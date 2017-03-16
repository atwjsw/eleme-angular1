'use strict';

angular.module('elemeApp').directive('appFood', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/template/food.html',
    scope: {
      food: '=',
      hide: '&'
    },
    link: function(scope, element) {
      console.log('link');
      element.ready(function() {
        if (!scope.scroll) {
          scope.scroll = new BScroll(food, {
            click: true
          });
        } else {
          scope.scroll.refresh();
        }
      });
    }
  };
}]);
