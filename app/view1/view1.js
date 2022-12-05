'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  $scope.user = JSON.parse(localStorage.getItem('user'));

  $http({
    method: "GET",
    url: "https://api.2performant.com/affiliate/programs",
    headers: {
      'access-token': localStorage.getItem('access-token'),
      'client':  localStorage.getItem('client'),
      'uid': localStorage.getItem('uid'),
      'token-type':  localStorage.getItem('token-type')
    }
  }).then(function mySuccess(response) {
      //i'm getting a 500 error on some endpoints, i can continue without dummy data or based on the documentation.
  }, function myError(response) {
    // a toast or something should go here
  });
});