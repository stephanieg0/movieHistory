define(function(require){
	var $ = require("jquery");
	var movieData = require("movie-data");
	
	//clicking for search. call a promise that will return the movie-data from url
	$("#searchMovie").click(function(){
		
		movieData.movies()
		.then(function(){
			console.log("promise kept");
		})
		.fail(function(){
			console.log("error");
		});

	});

});