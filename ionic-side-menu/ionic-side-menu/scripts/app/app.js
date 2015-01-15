angular.module('todo', ['ionic'])
.controller('TodoCtrl', function ($scope) {
    $scope.tasks = [
        { title: 'Collect coins' },
        { title: 'Eat mushrooms' },
        { title: 'Get high to grap the flag' },
        { title: 'Find the Princess' }
    ];
});