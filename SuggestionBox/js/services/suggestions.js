/**
 * Created by Vladislav on 12/14/2015.
 */
app.factory('suggestions', [function(){
    var demoSuggestions = {
        posts: [

            {
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 7,
                comments: [
                    {
                        text: "Cool idea, I like that!",
                        author: "Streamline27",
                        date: new Date(11, 9, 2015)
                    },
                    {
                        text: "Vodka Mishka Balalaika",
                        author: "Sharter",
                        date: new Date(11, 11, 2015)
                    },
                    {
                        text: "Nice one!",
                        author: "Nephius",
                        date: new Date(11, 12, 2015)
                    }
                ]
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: []
            },
            {
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: []
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                upvotes: 3,
                comments: []
            }
        ]
    };
    demoSuggestions.count++;
    return demoSuggestions;
}]);