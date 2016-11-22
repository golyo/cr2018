'use strict';

angular.module('cr2018.alap', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
		.when('/part', {
			templateUrl: 'view/alap/part.html',
			controller: 'AlapCtrl'
		})
		.when('/foundation', {
			templateUrl: 'view/alap/foundation.html',
			controller: 'AlapCtrl'
		})
		.when('/software', {
			templateUrl: 'view/alap/software.html',
			controller: 'AlapCtrl'
		})
	;
}])

.controller('AlapCtrl', function($scope, $rootScope, $location) {
    console.log('AlapCtrl');
});
