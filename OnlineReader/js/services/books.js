/**
 * Created by Vladislav on 12/14/2015.
 */

app.service('books', ['$http', function($http){
    var url = "https://s3.amazonaws.com/codecademy-content/courses/ltp4/books-api/books.json";
    return $http.get(url)
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });

}]);