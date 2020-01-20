//dependencies
var path = require("path");
const friends = require("../data/friends.js");

module.exports = function(app) {
  // Routes...

  // Get route to the api/friends for user visits
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Post route is for user results once survey completed
  app.post("/api/friends", function(req, res) {
    let friendFinder = {
      name: "",
      photo: "",
      userDifference: 1000
    };

    let userData = req.body;
    let userInputScores = userData.scores;
    // let userPhoto = userData.photo;

    //user takes survey + taking in info from user
    //setting up the object  (shortcuts)
    // matchName = "";
    // let matchImage = "";
    // let totalDifference = 1000; //setting large comparison base

    let totalDifference;

    //loop looks at every index in the friendsJS array
    for (let i = 0; i < friends.length; i++) {
      let newest = friends[i];
      totalDifference = 0;

      console.log(newest.name);

      //next loop checks user scores with friends scores
      for (let j = 0; j < newest.scores.length; j++) {
        // We calculate the difference between the scores and sum them into the friendFinder
        let newestScore = newest.scores[j];
        let currentUserScore = userInputScores[j];

        totalDifference += Math.abs(
          parseInt(currentUserScore) - parseInt(newestScore)
        );
      }

      if (totalDifference <= friendFinder.userDifference) {
        // reset friendFinder to be the new friend
        friendFinder.name = newest.name;
        friendFinder.photo = newest.photo;
        friendFinder.userDifference = totalDifference;
      }
    }

    // push the difference into the array
    friends.push(userData);
    res.json(friendFinder);
  });
};
