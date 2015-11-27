define(function(require){
	var $ = require("jquery");
	var movieDataFirebase = require("movie-data-firebase");
	var movieData = require("movie-data");
	var movieDom = require("movie-to-dom");
	var gs = require("get-set");
	var dom = require("dom");
	
	//clicking for search. call a promise that will return the movie-data from url
	$("#searchBox").keypress(function(){
		if(event.which == 13){
			console.log("click is working");
			// Clearing DOM
			$("#movie-poster").empty();
			//calling first promise to bring firebase data
			movieDataFirebase.moviesFirebase()
			.then(function (firebaseData){
				// console.log("first promise");
				movieDom.movieForm(firebaseData);
				// gs.setData(data);
			})
			//calling Second promise to bring API
			.then(function() {
				movieData.movies()
				.then(function (data){
					// console.log("second promise");
					movieDom.movieForm(data);
					// Sending movie object to setter to be able to access later
					gs.setData(data);

					}).fail(function(error){
						console.log("error");
				});
			})	
		};//end of if statement
	});//end of keypress function
});//end of define
