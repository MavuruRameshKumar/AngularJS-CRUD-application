var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
    console.log("In Controller...");
    $scope.newContact = {};
    $scope.clickedContact = {};

    $scope.contacts = [
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"},
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"},
        {FirstName: "Ramesh", LastName: "Kumar", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"}
    ];

    $scope.saveUser = function() {
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
    };

    $scope.selectContact = function(contact) {
        console.log(contact);
        $scope.clickedContact = contact;
    }
});