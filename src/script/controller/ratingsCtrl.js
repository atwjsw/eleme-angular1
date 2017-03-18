'use strict';

angular.module('elemeApp').controller('ratingsCtrl', ['$scope', '$http', '$document', function($scope, $http, $document) {
  $scope.desc = {
    all: '全部',
    positive: '满意',
    negative: '不满意'
  };

  var _initialScroll = function() {
    $document.ready(function() {
      if (!$scope.ratingsScroll) {
        $scope.ratingsScroll = new BScroll(ratings, {
          click: true
        });
      } else {
        $scope.ratingsScroll.refresh();
      }
    });
  };

   // $scope.$watch('seller', function() {
   // 		console.log($scope.seller);
    	
   // });

   $http.get('data/data.json').then(function(response) {
    $scope.ratings = response.data.ratings;
    $document.ready(function() {
      _initialScroll();      
    });
  });

   $scope.$watch('selectType', function() {
        // console.log('selectType');
        // element.ready(function() {
        _initialScroll();
        // });
      });

      $scope.$watch('onlyContent', function() {
        // console.log('onlyContent');
        _initialScroll();

      });

}]);
