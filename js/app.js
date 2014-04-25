/*global angular, requirejs*/
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        js: '../js',
        data: '../data'
    }
});

requirejs(['bootstrap/bootstrap.min',
           'angular/angular.min',
           'angular-route/angular-route.min',
           'angular-bootstrap/ui-bootstrap.min',
           'js/common',
           'data/links.js'
          ], function () {
    
    'use strict';

    var app = angular.module("app", [
        'ngRoute',
        'ui.bootstrap'
    ]);

    app.constant('appConfig', {
        project: 'R.T.Henry'
    });
    
    app.value('views', []);

    /* configure routing */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
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
    app.controller('navController', ['appConfig', '$location', 'views', function (appConfig, $location, views) {
        var navModel = this;
        navModel.project = appConfig.project;
        navModel.views = views;

        navModel.isActive = function (view) {
            return view === $location.path();
        };
    }]);
    return true;
        
});