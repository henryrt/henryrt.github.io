/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app');
    
    app.controller('contactController', function () {
        var vm = this;
        vm.title = 'Contact';
        vm.text = 'This is how you contact me.';
    });
    
    
}());