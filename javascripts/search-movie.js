define(function(require){
	var $ = require("jquery");
	var movieData = require("movie-data");
	var movieDom = require("movie-to-dom");
	
	//clicking for search. call a promise that will return the movie-data from url
	$("#searchMovie").click(function(){
		movieData.movies()
		.then(function(data){
			console.log("promise kept");
			movieDom.movieForm(data)
		})
		.fail(function(){
			console.log("fail error");
		});

	});

});
