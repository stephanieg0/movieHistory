define(function(require){
	var $ = require("jquery");
	var movieDataFirebase = require("movie-data-firebase");
	var movieData = require("movie-data");
	var movieDom = require("movie-to-dom");
	var gs = require("get-set");
	var dom = require("dom");

	// Declaring variables for later use
	// Variable for movie search input
	var movieInput;
	// Variable for storing Firebase values
	var firebaseData;
	// Variable for API movie search
	var searchMoviesArray = [];
	// Variable for Firebase movie search
	var myMoviesArray = [];
	// Variable for filtered movies
	var filteredArray = [];
	// Variable for combining movies
	var combinedArray = [];
	// Variable for checking for unique movies
	var uniqueMovies;
	
	//clicking for search. call a promise that will return the movie-data from url
	$("#searchBox").keypress(function(){
		if(event.which == 13){
			console.log("click is working");
			// Clearing DOM
			uniqueMovies = [];
			$("#movie-poster").empty();
			// Getting searchBox input
			movieInput = $("#inputTitle").val().toLowerCase();
			// Making Ajax call
			movieData.movies(movieInput)
				// Returning from Ajax
				.then(function(data){
					console.log("data", data);
					// Pushing searched movies into array
					for (var i = 0; i < data.Search.length; i++) {
						searchMoviesArray.push(data.Search[i]);
					}
					console.log("searchMoviesArray", searchMoviesArray);
					// Getting uuid
					var uuid = gs.getUid();
					// Getting Firebase ref
					var movieRef = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");
					// Getting Firebase keys
					var firebaseKeys = movieRef.orderByChild("imdbID");
					console.log("firebaseKeys", firebaseKeys);
					// Getting snapshot of Firebase
					firebaseKeys.once("value", function(snapshot) {
						firebaseData = snapshot.val();
						console.log("snapshot", firebaseData);
					// // Making Firebase call
					// movieDataFirebase.moviesFirebase()
					// 	// Returning from Firebase
					// 	.then(function(firebaseData){
					// 		console.log("firebaseData", firebaseData);
					// Pushing firebase movies into array
					myMoviesArray = $.map(firebaseData, function(element){
						return element;
					});
					// Filtering myMoviesArray to see if a title in Firebase equals the one searched for
					filteredArray = _.filter(myMoviesArray, function (obj) {
  						if (_.includes(obj.title.toLowerCase(), movieInput)) {
    						console.log("obj includes", obj.title);
						return obj;
  						}
					});
					console.log("filteredArray", filteredArray);
					// Combining search and filtered arrays
					combinedArray = filteredArray.concat(searchMoviesArray);
					console.log("combinedArray", combinedArray);
					// Filtering combinedArray for duplicates
					uniqueMovies = _.uniq(combinedArray, "imdbID");
					console.log("uniqueMovies", uniqueMovies);
					// Sending uniqueMovies through Handlebars
					require(['hbs!../templates/myMovies'], function (formTemplate) {
	    				console.log("movieDataTemplate is running");
	    				$("#movie-poster").append(formTemplate(uniqueMovies));
	    			});
					// movieDom.movieForm(uniqueMovies);
					movieInput = "";
					// });
					});
				});






















			// //calling first promise to bring firebase data
			// movieDataFirebase.moviesFirebase()
			// .then(function (firebaseData){
			// 	// console.log("first promise");
			// 	movieDom.movieForm(firebaseData);
			// 	// gs.setData(data);
			// })
			// //calling Second promise to bring API
			// .then(function() {
			// 	movieData.movies()
			// 	.then(function (data){
			// 		// console.log("second promise");
			// 		movieDom.movieForm(data);
			// 		// Sending movie object to setter to be able to access later
			// 		gs.setData(data);

			// 		}).fail(function(error){
			// 			console.log("error");
			// 	});
			// })	
		};//end of if statement
	});//end of keypress function
});//end of define
