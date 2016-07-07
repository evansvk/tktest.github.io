angular.module('starter.controllers')
    .controller('loginCtrl', ['$scope', 'SSFUsersRest', '$state','$window',
    function($scope, SSFUsersRest, $state, $window) {

        $scope.user = {};
        $scope.accessForm = function(form) {
                if (form.$invalid) {
                    return alert("Please fill in your email and password.");
                }

                SSFUsersRest.get($scope.user).then(function(response) {
            
                    if (response.status == 200) {
                        $window.localStorage.token=response.data.id;
                        $window.localStorage.userID=response.data.userId;
                        $scope.user={};
                        
                        $state.go('lobby');
                        console.log(response);
                    
                }}, function(error) {
                    if (error.status == 401) {
                        alert("401 User not found");
                    }else if (error.status == 403) {
                        alert("403 error");    
                    }else if (error.status == 404) {
                        alert("Server not found");
                    }else if (error.status == 500) {
                        alert("Server unavailable");
                    }
                    return error;
                });
        };

    }]);