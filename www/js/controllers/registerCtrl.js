/*global angular*/

angular.module('starter.controllers')
    .controller('registerCtrl', ['$scope', 'SSFUsersRest', '$state', '$window', function($scope, SSFUsersRest, $state, $window) {
        $scope.user = {};


        $scope.signupForm = function(form) {
            if (form.$invalid) {
                return alert("Please complete the form before proceeding.");
            }

            SSFUsersRest.post($scope.user) .then(function(response) {
                    if (response.status == 200) {
                        $window.localStorage.userId=response.data.id;
                        $window.localStorage.token=response.data.token;
                        
                        
                        alert("Successful");
                        $state.go('lobby');
                    }

                }, function(error) {

                    if (error.status == 422) {
                        alert("Email is already taken");
                    }
                    else if (error.status == 404) {
                        alert("User not found");
                    }
                    else if (error.status == 500) {
                        alert("Server not available");

                    }
                    // 200: Nothing went wrong(within the failed“ error”
                    //     function)
                    // 404: not found
                    // 422: email is already taken(response.data === null): user is offline
                    // 500: the world has ended,
                    // or the server just isn’ t online.

                    return error;
                });
        };


    }]);