'use strict';

angular.module('elemeApp').controller('sellerCtrl', ['$scope', '$http', '$document', function($scope, $http, $document) {

  $scope.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

  var _initScroll = function() {
    $document.ready(function() {
      if (!$scope.sellerScroll) {
        $scope.sellerScroll = new BScroll(seller, {
          click: true
        });
      } else {
        $scope.sellerScroll.refresh();
      }
    });
  };

  var _initPicScroll = function() {
    if ($scope.seller.pics) {
      var picWidth = 120;
      var margin = 6;
      var width = (picWidth + margin) * $scope.seller.pics.length - margin;
      picList.style.width = width + 'px';
      $document.ready(function() {
        if (!$scope.picScroll) {
          $scope.picScroll = new BScroll(picWrapper, {
            scrollX: true,
            eventPassthrough: 'vertical'
          });
        } else {
          $scope.picScroll.refresh();
        }
      });

    }
  };


  $scope.$watch('seller', function() {
    _initScroll();
    _initPicScroll();
  });

  // $scope.favorite = function() {
  //   // return loadFromLocal($scope.seller.id, 'favorite', false);   
  // };

  $scope.favorite = false;
  $scope.favoriteText = '收藏';

  $scope.toggleFavorite = function(event) {
    if (!event._constructed) {
      return;
    }
    $scope.favorite = !$scope.favorite;   
  };

  $scope.$watch('favorite', function(newValue) {
  	$scope.favoriteText = newValue ? '已收藏' : '收藏';
  });

}]);

