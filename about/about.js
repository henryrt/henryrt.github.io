/*global angular*/
var About = (function () {
    'use strict';
    
    var app = angular.module('app');
    
    app.controller('aboutController', ['datacontext', '$scope', function (datacontext, $scope) {
        var vm = this,
            promise = datacontext.getLinks();
        
        vm.title = 'About';
        vm.text = 'This is the about page.';
        vm.visibilityStyle = "display:none";
        promise
            .done(function (data) {
                vm.links = data;
                vm.visibilityStyle = "display:block";
                if (!promise.isMock) {
                    $scope.$apply();
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                vm.error = "Error fetching links: " + errorThrown + " (" + textStatus + ") " + jqXHR.responseText;
                $scope.$apply();
            });
    }]);
    
    return true;
}());