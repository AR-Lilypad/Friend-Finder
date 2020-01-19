const friendsData = require("../data/friends.js");

module.exports = function(app) {
  // Routes...

  // Get route to the api/friends that displays the possible matchesl
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // Post route is for user results inputted via survey
  app.post("/api/friends", function(req, res) {
    let userScore = req.body.scores;
    const scoreArr = [];
    let bestMatch = 0;

    for (let i = 0; i < friendsData.length; i++) {
      let scoreDiff = 0;

      for (let j = 0; j < userScore.length; j++) {
        scoreDiff += Math.abs(
          parseInt(friendsData[i].scores[j]) - parseInt(userScore[j])
        );
      }
      scoreArr.push(scoreDiff);
    }
    for (let i = 0; i < scoresArr.length; i++) {
      if (scoresArr[i] <= scoresArr[bestMatch]) {
        bestMatch = i;
      }
    }

    //return the best match
    let match = friendsData[bestMatch];
    res.json[match];

    console.log(req.body);
    friendsData.push(req.body);
  });

  app.post("/api/clear", (req, res) => {
    friendsData.length = [];
    res.json({
      ok: true
    });
  });
};
