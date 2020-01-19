const friendsData = require("../data/friends.js");

module.exports = function(app) {
  // Routes...

  // Get route to the api/friends for user visits
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
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
    let userName = userData.name;
    // same as above
    let userScores = userData.scores;
    // let userPhoto = userData.photo;
    console.log(userData);

    let totalDifference = 0;

    //map alternative to a loop and looks at every index in the array | answers is an array of integers
    let answers = userScores.map(function(item) {
      return parseInt(item, 10);
    });

    userData.scores = answers;
    console.log(userData);

    let bestFriend = [];
    for (let i = 0; i < friends.length; i++) {
      // friends[i]                                                     //ea friend in pre-existing loop
      for (let j = 0; j < friends[i].scores.length; j++) {
        let difference = Math.abs(friends[i].scores[j] - answers[j]);
        totalDifference += difference;
      }
      bestFriend.push(totalDifference); //search friends.js find lowest number in array = Math.min
    }

    // to find the smallest number, use something like math.min, with index of;  use another loop look through bestFriend array and find the lowest number and compare each number in
    let bestFriend = [];
    // Lowest diff is the friends with the lowest difference
    let lowestDiff = 1000;
    // Friend Index is the index that the new user was a closest match to
    let friendIndex;
    for (let i = 0; i < bestFriend.length; i++) {
      if (bestFriend[i] < lowestDiff) {
        lowestDiff = bestFriend[i];
        friendIndex = i;
      }
    }

    let bestMatch = friendsData();
  }); // app post
}; //module export
