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
        if (scope.totalCount <= 0) {
          scope.listShow = false;
        }
        _initScroll();
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
        if (scope.listShow) {
          scope.listShow = false;
        } else {
          if (scope.totalCount > 0) {
            scope.listShow = true;
            // _initScroll();
          }
        }
        // scope.listShow = !scope.listShow;
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
        // if (scope.listShow) {
        $document.ready(function() {
          if (!scope.foodListScroll) {
            scope.foodListScroll = new BScroll(listContent, {
              click: true
            });
          } else {
            scope.foodListScroll.refresh();
          }
        });
        // }
      };

      scope.$watch('listShow', function(newVal) {
        // console.log('initScroll');
        if (newVal) {
          _initScroll();
        }
      });

      scope.$on('addCart', function(event, target) {
        // console.log('drop', target); 
        scope.drop(target);
      });

      scope.balls = [{
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }];

      scope.dropBall = [];

      scope.drop = function(el) {
        console.log('el ' + el);
        for (var i = 0; i < scope.balls.length; i++) {
          var ball = scope.balls[i];
          if (!ball.show) {
            ball.show = true;
            ball.el = el;
            scope.dropBall.push(ball);
            console.log(scope.dropBall);
            return;
          }
        }
      };

      //TBD ball dropping animation

    }
  };
}]);
