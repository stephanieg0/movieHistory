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
			$.ajax({url: "http://www.omdbapi.com/?t=" + movieId + "&type=movie",
				method: "GET"
				})
				.done(function(data){
					console.log("what is this doing????", data)
      		// Getting current userID

      		var uuid = gs.getUid();
      		// Getting movie object
      		var movieObject = gs.getData();
      		console.log("movieObject", movieObject);
      		for (var i = 0; i < movieObject.Search.length; i++) {
      			movieObject.Search[i]
      		// Getting movie title from movie object
      		var title = movieObject.Search[i].Title;
      		console.log("title", title);
      		// Getting movie year from movie object
      		var year = movieObject.Search[i].Year;
      		console.log("year", year);
      		//IMDB information
      		var imdbId = movieObject.Search[i].imdbID;
      		console.log("OMG WHAT THE HELL????", imdbId);
      		// Getting movie actors from movie movieObject
      		var actors = data.Actors;
      		console.log("actors", actors);
      		};
			//get a reference to our Firebase app
			var ref = new Firebase("https://movie-history-app.firebaseio.com/users/"+ uuid +"/movies/" + movieObject.Search[i] + title);
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