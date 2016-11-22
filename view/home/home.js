'use strict';

angular.module('cr2018.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'view/home/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', function($scope, $rootScope, $location) {
    console.log('HomeCtrl');
});
