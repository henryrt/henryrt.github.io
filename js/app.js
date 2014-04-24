/*global angular*/
var Main = (function () {
    
    'use strict';

    var app = angular.module("app", [
        'ngRoute',
        'ui.bootstrap'
    ]);

    app.constant('appConfig', {
        project: 'R.T.Henry',
        views: ['Home', 'About', 'Contact']
    });

    /* configure routing */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                title: 'Home of ',
                templateUrl: 'home/home.html'
            })
            .when('/about', {
                title: 'About',
                templateUrl: 'about/about.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);

    app.run(['$rootScope', 'appConfig', function ($rootScope, appConfig) {
        $rootScope.$on('$routeChangeSuccess',
                function (event, current, previous) {
                var title = (current.title || '') + ' ' + appConfig.project;
                $rootScope.title = title;
            });
    }]);

    /* configure the nav controller */
    app.controller('navController', ['appConfig', '$location', function (appConfig, $location) {
        var navModel = this;
        navModel.project = appConfig.project;
        navModel.views = appConfig.views;

        navModel.isActive = function (view) {
            return view === $location.path();
        };
    }]);
    return true;
        
}());