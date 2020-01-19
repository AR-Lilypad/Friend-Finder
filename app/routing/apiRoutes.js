const friends = require("../data/friends.js");

module.exports = function(app) {
  // Routes...

  // Get route to the api/friends for user visits
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Post route is for user results once survey completed
  app.post("/api/friends", function(req, res) {
    let bestMatch = {
      name: "",
      photo: "",
      lowestDiff: 1000
    };

    //user takes survey + taking in info from user
    let userData = req.body;
    //setting up the object  (shortcuts)

    let userScores = userData.scores;
    // let userPhoto = userData.photo;

    let totalDifference;

    //loop looks at every index in the array | answers is an array of integers
    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      //next loop is for the friend scores
      for (let j = 0; j < currentFriend.scores.length; j++) {
        let currentFriendScore = currentFriend.scores[j];
        let currentUserScore = userScores[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(
          parseInt(currentUserScore) - parseInt(currentFriendScore)
        );
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    friends.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);
  });
};
