# FriendFinder

Friend Finder - Node and Express Servers

### Objectives

- The instructions for this activity (homework) is to build a compatibility-based "Friend Finder" application.

- The application will take in results from users' surveys then compare their results against all other users who have completed it. The application will then display the name and picture of the user with the best match overall.

- You will use Express to handle routing and will deploy your application on Heroku so others can fill it out.

- For a demo of this application see: [https://glacial-earth-00082.herokuapp.com/](https://glacial-earth-00082.herokuapp.com/)

### Basic Requirements

- The basic requirements are to get used to creating folder structures and organized directories. called FriendFinder. This particular app's folder structure follows the following protocols:

      	```
      	FriendFinder
      		- app
      			- data
      				- friends.js
      			- public
      				- home.html
      				- survey.html
      			- routing
      				- api-routes.js
      				- html-routes.js
      		- node_modules
      		- package.json
      		- server.js
      	```

- The survey has 10 questions along with multiple choice answers on a likert scale of 1-5 based on how much the user agrees or disagrees.

- The `server.js` file uses the basic npm packages shown during class instruction: express, body-parser, path.

- The `html-routes.js` file should include two routes:
  _ A GET Route to `/survey` which should display the survey page.
  _ A default USE route that leads to `home.html` which displays the home page.

- The `api-routes.js` file should include two routes:
  _ A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends
  _ A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

- Data in your application should be
  _ Saved as an array of objects.
  _ Each object should follow roughly the below format:

      		```
      		{
      		  "name":"Ahmed",
      		  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      		  "scores":[
      		     5,
      		     1,
      		     4,
      		     4,
      		     5,
      		     1,
      		     2,
      		     5,
      		     4,
      		     1
      	     	  ]
      		}

  ```

  ```

- Compatibility should be determined based on the following.
  _ Each user's results should be converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
  _ You will then compare the difference between the user's scores against other users' scores, question by question. You will then add up the differences to calculate the `totalDifference`.
  _ Example:
  _ User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  _ User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
  _ Total Difference: 2 + 1 + 2 = 5
  _ Absolute value of the differences (i.e 5-3 and 3-5 should both be 2).
  _ The person with the closest match should be the one with the "least" amount of difference.

- Once the closest match is determined, display the result back to the user in the form of a modal pop-up.

- The result should display both the name and picture of the closest match.
