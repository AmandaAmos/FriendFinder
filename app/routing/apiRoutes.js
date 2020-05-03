//this is the information displayed for API friends list. 
//linking routes to the data sources -user input and friends input.
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
//var userData = require();
var friends = require("../data/friends");

//routes we're taking

module.exports = function (app) {
    //api get requests
    //code that handles data from individual users.


    //this is where we get the info from friends, and display as a JSON object.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    //this is where the user data is used to create the best Match and displays user information. 
    app.post("/api/friends", function (req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 2000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        //now to display the info
        console.log("Name:" + userName);
        console.log("User score:" + userScores);

        //now to compare the data
        var sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of user's score" + sum);
        console.log("Best Match difference" + bestMatch.friendDifference);
        console.log("++++++++++++==============");

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Difference" + totalDifference);
            console.log("Best Match friend difference" + bestMatch.friendDifference);

            var bestfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score" + bestfriendScore);
            totalDifference += Math.abs(sum - bestfriendScore);
            console.log("---------------->" + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log("Total Difference:" + totalDifference);
        }

        //take the data, display, and return a JSON object/array
        console.log(bestMatch);
        friends.push(userData);
        console.log("New user added");
        console.log(userData);
        res.json(bestMatch);
    });

    //if(friendsData and userData thing) {
    //userData.push(req.body);
    //res.json(true);
    //}
    //else {
    //friendsData.push(req.body);
    //res.json(false);
    // }
    //    })

};