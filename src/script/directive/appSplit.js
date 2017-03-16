'use strict';

angular.module('elemeApp').directive('appSplit', [function() {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'view/template/split.html',    
  };
}]);
