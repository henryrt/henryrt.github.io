/*global angular*/
var Main = (function () {
    
    'use strict';

    var app = angular.module("app", [
        'ngRoute',
        'ui.bootstrap'
    ]),
        navController = function (appConfig, $location, views) {
            var navModel = {};
            navModel.project = appConfig.project;
            navModel.views = views;

            navModel.isActive = function (view) {
                return view === $location.path();
            };
            return navModel;
        };


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
 
    app.controller('navController', ['appConfig', '$location', 'views', navController]);
    
    return {
        navController: navController
    };
        
}());