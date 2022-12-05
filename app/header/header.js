'use strict';

angular.module('myApp.header', []).component('header', {
    templateUrl: 'header/header.html',
    controller: 'headerCtrl'
}).controller('headerCtrl', function ($scope, $http) {
    $scope.login = function () {
        var data = {
            user: {
                email: 'emailGoesHere',
                password: 'passwordGoesHere'
            }
        };
        $http({
            method: "POST",
            url: "https://api.2performant.com/users/sign_in.json",
            data: JSON.stringify(data)
        }).then(function mySuccess(response) {
            localStorage.setItem('access-token', response.headers()['access-token']);
            localStorage.setItem('token-type', response.headers()['token-type']);
            localStorage.setItem('client', response.headers()['client']);
            localStorage.setItem('uid', response.headers()['uid']);
            localStorage.setItem('expiry', response.headers()['expiry']);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }, function myError(response) {
            // a toast or something should go here
        });
    };
});
