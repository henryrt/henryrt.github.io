/*global angular*/
var Common = (function () {
    
    'use strict';
    
    Common = {};
    //
    // Formats error messages embedded in jqXHR object (jquery ajax call)
    //
    Common.formatJqxhrErrorMsg = function (jqXHR, textStatus, errorThrown) {
        return "Error fetching links: " + errorThrown + " (" + textStatus + ") " + jqXHR.responseText;
    };
    
    Common.addController = function (controllerId, module, dependencies, controller) {
        dependencies.push(controller);
        angular.module(module).controller(controllerId, dependencies);
    };
    
    Common.registerRoute = function ($routeProvider, routeInfo) {
        $routeProvider.when(
            routeInfo.path,
            {
                title: routeInfo.title,
                templateUrl: routeInfo.templateUrl
            }
        );
    };
    return Common;
}());