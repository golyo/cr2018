'use strict';

angular.module('cr2018', [
  'ngRoute',
  'ui.bootstrap',
  'cr2018.home',
  'cr2018.alap'
])

.run(function($rootScope, $location, $route) {
})

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider, $rootScope) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/home'});
    console.log('cr2018.config');
}])


;

