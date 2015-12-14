/**
 * Created by Vladislav on 12/14/2015.
 */

app.controller('BookshelfController', ['$scope', 'books', function($scope, books) {
    books.success(function(data){
        $scope.myBooks = data;
    });
}]);