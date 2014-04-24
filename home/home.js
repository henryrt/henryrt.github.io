/*global Common, angular*/
var Home = (function () {
    'use strict';
    
    var module = 'app',
        
        controllerId = 'homeController',
        
        dependencies = [],
        
        controller = function () {
            var vm = this;
            vm.title = 'Home';
            vm.text = 'This is the home page. Not much here... yet.';
        };
    
    Common.addController(controllerId, module, dependencies, controller);

    return true;
}());
    