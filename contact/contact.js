/*global angular, Common*/

var Contact = (function () {
    'use strict';
    
    var app = angular.module('app'),
        $routeProvider = angular.injector().get('$routeProvider');
    
    app.controller('contactController', function () {
        var vm = this;
        vm.title = 'Contact';
        vm.text = 'This is how you contact me.';
    });
    
    
//    Common.registerRoute($routeProvider,
//                 {
//                     path:  '/contact',
//                     title: 'Contact',
//            templateUrl: 'contact/contact.html'
//    });

             
    return true;
}());
