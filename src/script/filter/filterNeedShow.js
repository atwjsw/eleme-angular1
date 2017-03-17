'use strict';

angular.module('elemeApp').filter('filterNeedShow', [function() {
  return function(ratingList, obj) {
    // console.log(ratingList);
    // console.log(obj);
    var result = [];
    angular.forEach(ratingList, function(rating) {
        var isMatched = false;
        if ((obj.selectType === 2) || (rating.rateType === obj.selectType)) {
          if (rating.text !== '' || !obj.onlyContent) {
            isMatched = true;
          }
        }
        if (isMatched) {
          result.push(rating);
        }
      });
      // console.log(result);
      return result;
    };
}]);
