/*global Common, angular*/

var Contact = (function () {
    'use strict';
    
    var module = 'app',
        
        controllerId = 'contactController',
        
        dependencies = [],
        
        controller = function () {
            var vm = this;
            vm.title = 'Contact';
            vm.text = 'This is how you contact me.';
        };
    
    Common.addController(controllerId, module, dependencies, controller);
    
    return true;
}());
