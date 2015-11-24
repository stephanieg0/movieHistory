define(function(require){
	var $ = require("jquery");
	var movieData = require("movie-data");
	var movieDom = require("movie-to-dom");
	var gs = require("get-set");
	var dom = require("dom");
	
	//clicking for search. call a promise that will return the movie-data from url
	$("#searchBox").keypress(function(){
		if(event.which == 13){
		console.log("click is working");
		movieData.movies()
		.then(function(data){
			console.log("promise kept");
			movieDom.movieForm(data);
			// Sending movie object to setter to be able to access later
			gs.setData(data);

			})
		};
	});


});//end of define
