/**
 * Created by Vladislav on 12/13/2015.
 */
app.service('shows', ['$http', function($http){
    var url = "https://s3.amazonaws.com/codecademy-content/courses/ltp4/shows-api/shows.json";

    return $http.get(url)
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
}]);