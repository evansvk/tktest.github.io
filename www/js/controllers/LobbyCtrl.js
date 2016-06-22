angular.module('starter.controllers')
    .controller('LobbyCtrl', ['$scope', 'TKTestQuestionService', 'TKTestAnswerService', '$state',
        function($scope, TKTestQuestionService, TKTestQuestionService, TKTestAnswerService, $state) {
            TKTestQuestionService.all();

            $scope.goToTest = function() 
            {
                TKAnswersService.resetAnswers();
                $state.go('question',{ questionID: 1 });
            };

        
    }]);
