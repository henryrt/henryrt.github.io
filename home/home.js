/*global Common, angular*/
var Home = (function () {
    'use strict';
    
    var module = 'app',
        
        controllerId = 'homeController',
        
        dependencies = [],
        
        controller = function () {
            return {
                title: 'Home',
                text: 'This is the home page. Not much here... yet.'
            };
        };
    
    Common.registerRoute(module, {
        path: '/home',
        tabName: 'Home',
        title: 'Home of ',
        templateUrl: 'home/home.html'
    });

    Common.addController(controllerId, module, dependencies, controller);

    return true;
}());
    