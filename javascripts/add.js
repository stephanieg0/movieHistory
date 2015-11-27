define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var gs = require("get-set");
	var movieData = require("movie-data");
	var Q = require("q");
	var dom = require("dom");

	// Returning to post items to Firebase
    return {
		
      	addInfo: function(movieId) {
			$.ajax({url: "http://www.omdbapi.com/?i=" + movieId + "&type=movie",
				method: "GET"
				})
				.done(function(data){
      		// Getting current userID

      		var uuid = gs.getUid();
      		// Getting movie object
      		gs.getData();
      		// Getting movie title from movie object
      		var title = data.Title;
      		console.log("title", title);
      		var firebaseKey = title.toLowerCase().replace(/ /g, "_");
      		// Getting movie year from movie object
      		var year = data.Year;
      		console.log("year", year);
      		//IMDB information
      		var imdbId = data.imdbID;
      		console.log("OMG WHAT THE HELL????", imdbId);
      		// Getting movie actors from movie movieObject
      		var actors = data.Actors;
      		console.log("actors", actors);
      		// Getting imdbID from movie movieobject
      		var imdbID = data.imdbID;
			//get a reference to our Firebase app
			var ref = new Firebase("https://movie-history-app.firebaseio.com/users/"+ uuid +"/movies/" + imdbID);
      		console.log("uuid", uuid);
      		//moving to next page
      		// dom.myAddedMovies();
      		// Pushing object to Firebase
			ref.set({

		  		"title": title,
		  		"year": year,
		  		"actors": actors,
		  		"imdbID": imdbId,
		  		"stars": 0,
		  		"watched": false,
		  		"poster": "http://img.omdbapi.com/?i=" + imdbId + "&apikey=8513e0a1"


			}), function(error) {
			  if (error) {
			  	// Error psoting to Firebase
			  	alert(error);
			    console.log("Error creating user:", error);
			  } 
			};
		});
		}
		// return addInfo;
	};
			console.log("?IS THIS WORKING?", addInfo);
});