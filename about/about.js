/*global Common, angular*/
var About = (function () {
    'use strict';
    
    var module = 'app',
        
        controllerId = 'aboutController',
        
        dependencies = ['datacontext', '$scope'],
        
        controller = function (datacontext, $scope) {
            var vm = {},
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
                    vm.error = Common.formatJqxhrErrorMsg(jqXHR, textStatus, errorThrown);
                    $scope.$apply();
                });
        
            return vm;
        };
    
    Common.registerRoute(module, {
        path: '/about',
        tabName: 'About',
        title: 'About',
        templateUrl: 'about/about.html'
    });
    
    Common.addController(controllerId, module, dependencies, controller);
    
    return true;
}());