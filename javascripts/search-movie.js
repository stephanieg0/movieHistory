define(function(require){
	var $ = require("jquery");
	var movieData = require("movie-data");
	var movieDom = require("movie-to-dom");
	var dom = require("dom");
	
	//clicking for search. call a promise that will return the movie-data from url
	$("body").on("click", "#searchMovie", function(){
		console.log("click is working");
		movieData.movies()
		.then(function(data){
			console.log("promise kept");
			movieDom.movieForm(data);
			// dom.searchResults();
		})
		.fail(function(){
			console.log("fail error");
		});

	});

});
