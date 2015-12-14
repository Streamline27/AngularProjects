/**
 * Created by Vladislav on 12/9/2015.
 */
app.controller('MainController', ['$scope', 'shows', function($scope, shows) {
    shows.success(function(data){
        $scope.shows = data;
    });
}]);