'use strict';

angular.module('elemeApp').controller('goodsCtrl', ['$scope', '$http', '$document', function($scope, $http, $document) {

  $scope.goods = [];
  $scope.listHeight = [];
  $scope.scrollY = 0;
  $scope.foodShow = false;
  $scope.selectedFood = {};
  $scope.currentIndex = 0;
  $scope.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

  $http.get('data/data.json').then(function(response) {
    $scope.goods = response.data.goods;
    $document.ready(function() {
      _initScroll();
      _calculateHeight();
    });
  });

  var _initScroll = function() {

    $scope.menuScroll = new BScroll(menuWrapper, {
      click: true
    });
    $scope.foodsScroll = new BScroll(foodsWrapper, {
      probeType: 3,
      click: true
    });
    $scope.foodsScroll.on('scroll', function(pos) {
      $scope.scrollY = Math.abs(Math.round(pos.y));
      $scope.currentIndex = _calculateCurrentIndex();
      // 强制执行脏值检查
      $scope.$apply();
    });
  };

  var _calculateHeight = function() {
    var foodList = foodsWrapper.getElementsByClassName('food-list-hook')
    var height = 0;
    $scope.listHeight.push(height);
    for (var i = 0; i < foodList.length; i++) {
      var item = foodList[i];
      height += item.clientHeight;
      $scope.listHeight.push(height);
    }
  };


  $scope.selectMenu = function(index, event) {
    if (!event._constructed) {
      return;
    }
    var foodList = foodsWrapper.getElementsByClassName('food-list-hook');
    var el = foodList[index];
    $scope.foodsScroll.scrollToElement(el, 300);
    $scope.currentIndex = index;
  };

  $scope.$watch('goods', function(goods) {
    $scope.selectFoods = [];
    goods.forEach(function(good) {
      good.foods.forEach(function(food) {
        if (food.count) {
          $scope.selectFoods.push(food);
        }
      });
    });
  }, true);

  $scope.selectFood = function(food, event) {
    if (!event._constructed) {
      return;
    }
    $scope.selectedFood = food;
    $scope.foodShow = true;

    // this.$refs.food.show()
  };

  $scope.hideFood = function() {
    $scope.foodShow = false;
  };

  var _calculateCurrentIndex = function() {
    for (var i = 0; i < $scope.listHeight.length; i++) {
      var height1 = $scope.listHeight[i];
      var height2 = $scope.listHeight[i + 1];
      if (!height2 || ($scope.scrollY >= height1 && $scope.scrollY < height2)) {
        return i;
      }
    }
    return 0;
  };

  $scope.$on('add', function(event, target) {
    console.log('add', target);
    // _drop(target); 

    $scope.$broadcast('addCart', target);
  });



}]);

