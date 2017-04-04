var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
    console.log("In Controller...");


    $scope.contacts = [
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"},
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"},
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"}
    ];
});