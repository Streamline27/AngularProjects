/**
 * Created by Vladislav on 12/14/2015.
 */
app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {

    // Your code here


    // Using this property to create the URL in line 9 of views/book.html
    $scope.currentBookIndex = parseInt($routeParams.bookId);
    books.success(function(data){
        $scope.book = data[$scope.currentBookIndex];
    });


}]);