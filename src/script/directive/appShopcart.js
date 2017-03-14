'use strict';

angular.module('elemeApp').directive('appShopcart', ['$document', function($document) {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/template/shopcart.html',
    scope: {
      deliveryPrice: '=',
      minPrice: '=',
      selectFoods: '='
    },
    link: function(scope, element, attrs) {
      scope.$watch('selectFoods', function(selectFoods) {
        scope.totalCount = 0;
        scope.totalPrice = 0;
        selectFoods.forEach(function(food) {
          scope.totalCount += food.count;
          scope.totalPrice += food.price * food.count;
        });
        scope.isCheckout = scope.totalPrice >= scope.minPrice;
        scope.payDesc = payDesc();
      }, true);

      var payDesc = function() {
        if (scope.totalPrice === 0) {
          return '￥' + scope.minPrice + '元起送';
        } else if (scope.totalPrice > 0 && scope.totalPrice < scope.minPrice) {
          return '还差￥' + (scope.minPrice - scope.totalPrice) + '元起送';
        } else {
          return '去结算';
        }
      };

      scope.listShow = false;
      scope.toggleList = function() {
        scope.listShow = !scope.listShow;
        _initScroll();
      };

      scope.emptyCart = function() {
        scope.selectFoods.forEach(function(food) {
          food.count = 0;
        });
        scope.listShow = false;
      };

      scope.pay = function(event) {
        event.stopPropagation();
        if (!scope.isCheckout) {
          return;
        }
        window.alert('请支付' + this.totalPrice + '元');
      };

      var _initScroll = function() {
        if (scope.listShow) {
          $document.ready(function() {
            if (!scope.foodListScroll) {
              scope.foodListScroll = new BScroll(listContent, {
                click: true
              });
            } else {
              scope.foodListScroll.refresh();
            }
          });
        }
      };
    }
  };
}]);