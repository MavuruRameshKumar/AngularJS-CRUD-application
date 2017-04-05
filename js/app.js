var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
    $scope.newContact = {};
    $scope.clickedContact = {};
    $scope.message = "";

    $scope.contacts = [
        {FirstName: "John", LastName: "Doe", Email: "abc@gmail.com", PhoneNumber: "9999999999", Status: "Active"}
    ];

    $scope.saveUser = function() {
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
        $scope.message = "New Contact added successfully!";
    };

    $scope.selectContact = function(contact) {
        console.log(contact);
        $scope.clickedContact = contact;
    };

    $scope.updateContact = function(contact) {
        $scope.message = "Contact updated successfully!";
    };

    $scope.deleteContact = function(contact) {
        $scope.contacts.splice($scope.contacts.indexOf($scope.clickedContact), 1);
        $scope.message = "Contact deleted successfully!";
    };

    $scope.clearMessage = function() {
        $scope.message = "";
    }
});