define(function(require) {
	var Q = require("q");
	var gs = require("get-set");
	// Declaring variable for later use
	var watched;

	return {

		showAllMovies: function() {
			//ajax call from clickhandler all
			var deferred = Q.defer();
			// Getting unique key
			var uuid = gs.getUid();
			$.ajax({url: "https://movie-history-app.firebaseio.com/users/" + uuid + "/movies.json",
				method: "GET",
				})
				.done(function(data){
					console.log("data", data);
					// Sending poster back
					// data.poster = "https://movie-history-app.firebaseio.com/users/" + uuid + "/movies" + movieInput + poster;
					//resolving promise
					deferred.resolve(data);

					// console.log("data", data);
					// console.log("data poster", data.poster);
				})
				.fail(function(){
					console.log("error");
					deferred.reject(error);
				});
				//returning promise
				return deferred.promise;
			},

		// Called on clickhandler.js
		allMovies: function(data) {
			// Sending movie object through template
			require(["hbs!../templates/myMovies"], function (all){
				console.log("data", data);
				// Getting the value of watched = true or false
	          	// watched = data.watched
	          	// console.log("watched", watched);
				// Removing functionality based on watched = true or false 
	          	// if (watched = false) {
	           //  	// Hide add button
	           //  	$(".add-button").hide();
	           //  	// Stars hidden by default
	            	
	          	// } else {
	          	// 	// Hide watch button
	          	// 	$(".watch-button").hide();
	          	// 	// Hide add button
	          	// 	$(".add-button").hide();
	          	//   }
	          	
	          	// Sending users movie object to DOM
				$("#movie-poster").append(all(data));
	          	// Show stars
	            $(".star-container").show();
	          	// Show watch button
	            $(".watch-button").show();
			});
		},

		// Called on clickhandler.js
		watchedMovies: function(data) {
			// Sending watched movies object through template
			require(["hbs!../templates/myMovies"], function (watched){
				console.log("data", data);
				// // Hide watch button
	   //        	$(".watch-button").hide();
	   //        	// Hide add button
	   //        	$(".add-button").hide();
				// // Sending to DOM
				
				$("#movie-poster").append(watched(data));
				console.log("watched(data)", watched(data))
	          	// Show stars
	            $(".star-container").show();
			});	
		},

		// Called on clickhandler.js
		unwatchedMovies: function(data) {
			console.log("data", data);
			// Sending watched movies object through template
			require(["hbs!../templates/myMovies"], function (unwatched){
				console.log("data", data);
				// // Show watch button
	   //          $(".watch-button").show();
	   //          // Hide add button
	   //          $(".add-button").hide();
	   //          // Stars hidden by default
				
				// Sending to DOM
				$("#movie-poster").append(unwatched(data));
				// console.log("unwatched(data)", unwatched(data));
	        });
		},
		
		// Called on clickhandler.js
		favoriteMovies: function(data) {
			// Sending watched movies object through template
			require(["hbs!../templates/myMovies"], function (favorites){
				console.log("data", data);
				// // Hide watch button
	   //        	$(".watch-button").hide();
	   //        	// Hide add button
	   //        	$(".add-button").hide();
	   			
				// Sending to DOM
				$("#movie-poster").append(favorites(data));
	          	// Show stars
	            $(".star-container").show();
	        });
		}
	}
});