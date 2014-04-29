/*global Common, angular*/
var Home = (function () {
    'use strict';
    
    var module = 'app',
        
        controllerId = 'homeController',
        
        dependencies = [],
        
        controller = function () {
            return {
                title: 'Home',
                text: 'This is the home page. Not much here... yet.',
                imgSrc: '/img/shatner.jpg'
            };
        };
    
    Common.registerRoute(module, {
        path: '/home',
        tabName: 'Home',
        title: 'Home of ',
        templateUrl: 'home/home.html',
        controller: controller,
        controllerAs: 'vm'
    });

    Common.addController(controllerId, module, dependencies, controller);

    return true;
}());
    