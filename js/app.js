var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
    console.log("In Controller...");
    $scope.newUser = {};

    $scope.contacts = [
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"},
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"},
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"}
    ];

    $scope.saveUser = function() {
        $scope.contacts.push($scope.newUser);
        console.log($scope.contacts);
        console.log($scope.newUser);
        $scope.newUser = {};
    };
});