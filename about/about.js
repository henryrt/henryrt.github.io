/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app');
    
    app.controller('aboutController', ['datacontext', '$scope', function (datacontext, $scope) {
        var vm = this;
        vm.title = 'About';
        vm.text = 'This is the about page.';
        datacontext.getLinks()
            .done(function (data) {
                vm.links = data;
                $scope.$apply();
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                vm.error = "Error fetching links: " + errorThrown + " (" + textStatus + ") " + jqXHR.responseText;
                $scope.$apply();
            });
    }]);
    
}());