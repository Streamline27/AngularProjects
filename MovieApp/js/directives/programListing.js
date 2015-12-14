/**
 * Created by Vladislav on 12/9/2015.
 */
app.directive('programListing', function(){
    return{
        restrict: 'E',
        scope:{
            listing: '='
        },
        templateUrl: 'js/directives/programListing.html'
    }
});