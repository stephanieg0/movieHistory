define(function(require){
	var $ = require("jquery");
	var myMovieData = require("my-movie-data");
	var movieDom = require("movie-to-dom");
	var gs = require("get-set");
	var dom = require("dom");

	// Declaring variable for later use
	var movie;
	var poster;
	var title;
	var watched;

	//clicking for search my movies. call a promise that will return the movie-data from Firebase
	$("body").on("click", "#searchMyMovies", function(){
		console.log("search my movies click");
		// Getting value from input
		var movieInput = $("#inputTitle").val();
		console.log("movieInput", movieInput);
		// Making Ajax call and promise
		myMovieData.myMovies()
		// Retutrning Ajax call with promise
		.then(function(data){
			console.log("data",data);
			// Getting title key
			movie = data[movieInput];
			console.log("movie", movie);
			// Getting movie title
			title = data[movieInput].title;
			console.log("title", title);
			// Getting watched value
			watched = data[movieInput].watched;
			console.log("watched", watched);
			// Getting poster
			poster = data[movieInput].poster;
			console.log("poster", poster);
			// If input value equals movie title
			if (movieInput === title) {
				// If watcehd equals false
				if (watched === false) {
					console.log("is this working?")
					dom.mySearchedMovies(data[movieInput])
					
				} else {
						dom.mySearchedMovies(data[movieInput])
						// $(".watch-button").hide();
						// $(".add-button").hide();
						$("#myModal3").hide();
				  }
			} else {
				alert("No movies matched your search.")
			}

			// }
		// 	console.log("promise kept");
		// 	// Sending return to DOM
		// 	movieDom.movieForm(data);
		// 	// Sending movie object to setter to be able to access later
		// 	gs.setData(data);
		// 	// dom.searchResults();
		// 	dom.loadNavbar();
		})
		.fail(function(){
			console.log("fail error");
		});

	});

});