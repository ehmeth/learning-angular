// Code goes here
(function(){
    var app = angular.module("githubViewer");

    var MainController = function($scope, github) {
        $scope.reposSortOrder = "-stargazers_count";
        $scope.username = "robashton";

        var onUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data) {
           $scope.repos = data;
        };

        var onError = function(response) {
            $scope.message = "Could not fetch data";
        };

        $scope.search = function(username) {
           github.getUser(username).then(onUserComplete, onError);
        };
    }
    MainController.$inject = ['$scope', 'github'];

    app.controller("MainController", MainController);
}());
