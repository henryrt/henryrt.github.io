/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module("app", ['ngRoute']);
    
    /* configure routing */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        })
            .otherwise({
                redirectTo: '/home'
            });
    }]);
}());