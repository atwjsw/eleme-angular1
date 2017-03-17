'use strict';

angular.module('elemeApp').directive('appRatingselect', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/template/ratingselect.html',
    scope: {
      ratings: '=',
      selectType: '=',
      onlyContent: '=',
      desc: '='
    },
    link: function(scope) {
      // scope.desc = {
      //   all: '全部',
      //   positive: '满意',
      //   negative: '不满意'
      // };
      
      scope.onlyContent = false;
      scope.toggleContent = function(event) {
        if (!event._constructed) {
          return;
        }
        // this.$emit('toggle')
        scope.onlyContent = !scope.onlyContent;
      };
      scope.selectType = 2;
      scope.select = function(rateType, event) {
        if (!event._constructed) {
          return;
        }
        // this.$emit('select', rateType)
        scope.selectType = rateType;
      };
    }
  };
}]);
