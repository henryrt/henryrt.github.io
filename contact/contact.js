/*global angular, Common*/

var Contact = (function () {
    'use strict';
    
    var module = 'app',
        
        dependencies = [],
        
        controllerId = 'contactController',
        
        controller = function () {
            return {
                title: 'Contact',
                text: 'This is how you contact me.'
            };
        };
    
    Common.registerRoute(module, {
        path:  '/contact',
        tabName: 'Contact',
        title: 'Contact',
        templateUrl: 'contact/contact.html'
    });
                         
    Common.addController(controllerId, module, dependencies, controller);

    return true;
}());
