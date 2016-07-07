/*global angular*/
angular.module('RESTServices')
    .service('TestResultsRest', ['$http','$window', function($http, $window) {

        var TestResultsRest = this;
        var apiURL = 'https://tktest-sirratav.c9users.io/api/TestResults/';
        TestResultsRest.save = function(test) {
            return $http({
                url: apiURL,
                method: 'POST',
                data: test,
                headers: {
                    'Authorization': $window.localStorage.token
                }

            });
        };
     TestResultsRest.get = function(token, userId) {
            return $http({
                url: 'https://tktest-sirratav.c9users.io/api/TestResults?filter[where][userID]=' + userId,
                method: 'GET',
                headers: {
                    'Authorization': token
            }
            });
        };

    }]);