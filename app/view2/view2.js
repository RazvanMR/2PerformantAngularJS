'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope) {
  $scope.calculateLifetime = function () {
    const actualDate = new Date(Date.now());
    const tokenExpireDate = new Date(parseInt(localStorage.getItem('expiry')) * 1000);
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate());
    const utc2 = Date.UTC(tokenExpireDate.getFullYear(), tokenExpireDate.getMonth(), tokenExpireDate.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  };

  $scope.timestamp = new Date(Date.now()).toUTCString();
  $scope.expiry = new Date(parseInt(localStorage.getItem('expiry')) * 1000).toUTCString()
  $scope.lifetime = $scope.calculateLifetime();
});