app.service('places', ['$http', function($http){
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934|" +
        "-74.004897&gslimit=30&format=json&callback=JSON_CALLBACK";

    return $http.jsonp(url)
        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
}]);