/*global angular*/
angular.module("RESTServices", [])
    .service('SSFUsersRest', ['$http', function($http) {
        var SSFUsersRest = this;
        var apiUrl = "https://tktest-sirratav.c9users.io/api/SSFUsers";
        SSFUsersRest.post = function(newUserData) {
            return $http({
                url: apiUrl,
                method: 'POST',
                data: newUserData
            });
        };
        SSFUsersRest.get = function(data) {
            return $http({
                url: "https://tktest-sirratav.c9users.io/api/SSFUsers/login",
                method: 'POST',
                data: data
            });

        };

    }]);