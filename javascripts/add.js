define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var gs = require("get-set");
	var movieData = require("movie-data");
	var Q = require("q");
	var dom = require("dom");

	// Returning to post items to Firebase
    return {
		
      	addInfo: function() {
      		// Getting current userID
      		var uuid = gs.getUid();
      		// Getting movie object
      		var movieObject = gs.getData();
      		console.log("movieObject", movieObject);
      		// Getting movie title from movie object
      		var title = movieObject.Title;
      		console.log("title", title);
      		// Getting movie year from movie object
      		var year = movieObject.Year;
      		console.log("year", year);
      		// Getting movie actors from movie movieObject
      		var actors = movieObject.Actors;
      		console.log("actors", actors);
			//get a reference to our Firebase app
			var ref = new Firebase("https://movie-history-app.firebaseio.com/users/"+ uuid);
      		console.log("uuid", uuid);
      		//moving to next page
      		dom.myAddedMovies();
      		// Pushing object to Firebase
			ref.push({

		  		"title": title,
		  		"year": year,
		  		"actors": actors,
		  		"stars": 0,
		  		"watched": false,
		  		"poster": "http://img.omdbapi.com/?i=" + movieObject.imdbID + "&apikey=8513e0a1"

			}, function(error, userData) {
			  if (error) {
			  	// Error psoting to Firebase
			  	alert(error);
			    console.log("Error creating user:", error);
			  } else {
			  	// Posting was successful
			  	}
			});
			// console.log("authData", uuid.uid);
		}
	};
});