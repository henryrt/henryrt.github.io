/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app');
    
    app.controller('homeController', function () {
        var vm = this;
        vm.title = 'Home';
        vm.text = 'This is the home page. Not much here... yet.';
    });
    
    
}());
    