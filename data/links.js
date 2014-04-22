/*global angular, $, console, $q*/
(function () {
    'use strict';
    
    var serviceId = 'datacontext',
        app = angular.module('app');
        
    function datacontext() {
        
        var getLinks = function () {
            var url = '/data/links.json',
                promise = $.getJSON(url)
                    .always(function () {
                        console.log("Fetching " + url);
                    });
            return promise;
        },
        
            service = {
                getLinks: getLinks
            };

        return service;
    }
    app.factory(serviceId, datacontext);
 
}());