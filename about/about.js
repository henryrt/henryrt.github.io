/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app');
    
    app.controller('aboutController', function () {
        var vm = this;
        vm.title = 'About';
        vm.text = 'This is the about page.';
    });
    
    
}());