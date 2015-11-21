define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var gs = require("get-set");
	var movieData = require("movie-data")
	var Q = require("q");

	//have to return the function to the page view.
    return {
		//if email is not the correct format, promise will be rejected.
      	//else the promise will be resolved.
      	addInfo: function() {
      		// Getting current userID
      		var uuid = gs.getUid();
      		// Getting movie object
      		var movieObject = gs.getData();
      		console.log("movieObject", movieObject);
      		// Getting movie title from movie object
      		var title = movieObject.Title;
      		console.log("title", movieObject.Title);
      		// Getting movie year from movie object
      		var year = movieObject.Year;
      		console.log("year", movieObject.Year);
      		// Getting movie year from movie object
      		var actors = movieObject.Actors;
      		console.log("actors", movieObject.Actors);

      		var poster = movieObject.poster
			//get a reference to our Firebase app
			var ref = new Firebase("https://movie-history-app.firebaseio.com/users/"+ uuid);
      		console.log("uuid", uuid);
			ref.push({
				
		  		"title": title,
		  		"year": year,
		  		"actors": actors,
		  		"stars": 0,
		  		"watched": false,
		  		"poster": "http://img.omdbapi.com/?i=" + movieObject.imdbID + "&apikey=8513e0a1"

			}, function(error, userData) {
			  if (error) {
			  	alert(error);
			    console.log("Error creating user:", error);
			  } else {
			  	}
			});
			// console.log("authData", uuid.uid);
		}
	};
});