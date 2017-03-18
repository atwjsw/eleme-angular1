'use strict';

angular.module('elemeApp').directive('appFood', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/template/food.html',
    scope: {
      food: '=',
      hide: '&',
      foodShow: '='
    },
    link: function(scope, element) {

     
    scope.desc =  {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
    };    

      scope.$watch('selectType', function() {
        // console.log('selectType');
        // element.ready(function() {
        _initialScroll();
        // });
      });

      scope.$watch('onlyContent', function() {
        // console.log('onlyContent');
        _initialScroll();

      });

      scope.$watch('foodShow', function(foodShow) {
        // console.log('foodShow');
        // element.ready(function() {
        if(foodShow) {
          _initialScroll();
        }
        // });
      });

      var _initialScroll = function() {
        element.ready(function() {
          if (!scope.foodScroll) {
            scope.foodScroll = new BScroll(food, {
              click: true
            });
          } else {
            scope.foodScroll.refresh();
          }
        });
      };

      scope.addFirst = function ($event) {
        console.log('addFirst');
        if (!event._constructed) {
         return;
        }
        scope.food.count = 1;
      };
    }
  };
}]);

