/*global angular*/
angular.module('RESTServices')
    .service('TestResultsRest', ['$http', function($http) {

        var TestResultsRest = this;
        var apiURL = 'https://tktest-sirratav.c9users.io/api/TestResults/';
        TestResultsRest.save = function(test) {
            return $http({
                url: apiURL,
                method: 'POST',
                data: test

            });
        };
     TestResultsRest.get = function(token, userID) {
            return $http({
                url: apiURL,
                method: 'GET',
                headers: {'Authorization' : token
            }
            });
        };

    }]);