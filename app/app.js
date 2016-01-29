'use strict';

/**
 * Angular module definition, also includes
 * Module dependencies
 * Module configuration
 * App routes
 */

var apsgUI = angular.module('apsgUI', [
    'ngRoute',
    'myApp.view2'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/login'});

    $routeProvider.when('/login', {
        templateUrl: 'templates/views/login.html',
        controller: 'loginCtrl'
    });

    $routeProvider.when('/administration', {
        templateUrl: 'templates/views/layout.html',
        controller: 'adminCtrl'
    });
}]);
