define(function(require){
	var $ = require("jquery");
	var Q = require("q");
	var gs = require("get-set");
	var searchMovie = ("search-movie");


	//Getting movie json data from omdbapi.com/being called from my-search
	return {
		
		//ajax call from my-search
		myMovies: function() {
			var deferred = Q.defer();
			// Getting unique key
			var uuid = gs.getUid();
			$.ajax({url: "https://movie-history-app.firebaseio.com/users/" + uuid + "/movies.json",
				method: "GET",
				})
				.done(function(data){
					console.log("data", data);
					// Sending poster back
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
		}
	};

});//end of define