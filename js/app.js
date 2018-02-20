var module = angular.module('app', ["ControllerModule"]);

module.directive("isolatedDirective", function(){
    
    var directive = {}
    
    directive.restrict = "EA";
    directive.scope = {
        first:'@',
        last:'=',
        action: '&'
    }
    directive.templateUrl = "../directives/isolatedScopeDirective.html";
    
    return directive;
    
})


