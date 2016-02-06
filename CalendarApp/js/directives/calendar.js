/**
 * Created by Vladislav on 1/29/2016.
 */
app.directive('calendar', function(){
    return{
        restrict: 'E',
        scope:{
            data: '='
        },
        templateUrl: 'js/directives/calendar.html'
    }
});