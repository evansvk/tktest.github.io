/* global angular*/

/*angular.module('starter.controllers')
    .controller('LobbyCtrl', ['$scope', '$state', 'TKTestQuestionService', 'TKAnswersService',

        function($scope, $state, TKTestQuestionService, TKAnswersService) {
            console.log("Calling questions?");

            TKTestQuestionService.all();


            $scope.goToTest = function() {
                TKAnswersService.resetAnswers();
                $state.go('question', {
                    questionID: 1
                });
            };

        }
    ]); */
    
    angular.module('starter.controllers')
.controller('HistoryCtrl', ['$scope', '$window', '$state', 'tests', 'TKAnswersService', 'TKResultsButtonService',
function($scope, $window, $state, tests, TKAnswersService, TKResultsButtonService) {

    $scope.tests = tests === undefined ? [] : tests;
    
      $scope.goToResult = function(test)
    {
        var answers = {
            "Competing": test.competing,
            "Collaborating": test.collaborating,
            "Compromising": test.compromising,
            "Avoiding": test.avoiding,
            "Accommodating": test.accommodating
        };
        TKAnswersService.setAnswers(answers);
        TKResultsButtonService.setShouldShowMenuButton(false);
       
        $state.go('results');
    };
}]);