var module = angular.module("ControllerModule", []);

module.controller("MainController", function($scope){
    $scope.firstName = "Virat";
    $scope.lastName = "Patil";
    
    $scope.clickHandler = function (value1, value2) {
        $scope.firstName = value1;
        $scope.lastName = value2;
    }
});