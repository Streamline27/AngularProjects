/**
 * Created by Vladislav on 12/9/2015.
 */
app.controller('MainController', ['$scope', function($scope) {

    var sherlockProgram = {
        series: "Sherlock",
        series_img: "img/sherlock.jpg",
        genre: "Crime drama",
        season: 3,
        episode: "The Empty Hearse",
        description:  getSherlockDescription(),
        datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
    };

    var limitlessProgram = {
        series: "Limitless",
        series_img: getLimitlessImg(),
        genre: "Crime drama, fantasy",
        season: 1,
        episode: "The Begining",
        description: getLimitlessDescription(),
        datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
    }

    $scope.programs = [sherlockProgram, limitlessProgram];

    // Helper functions
    function getSherlockDescription(){
        return "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.";
    }

    function getLimitlessDescription(){
        return "A man gains the ability to use the full extent of his brain's capabilities. A television adaptation of the 2011 film, 'Limitless'.";
    }

    function getLimitlessImg(){
        return "http://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2015/09/16/526764611665/CBS_LIMITLESS_101_IMAGE_LOGO_645848_640x360.jpg";
    }

}]);