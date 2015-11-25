define(function(require){
	var $ = require("jquery");
	var Q = require("q");
	var Firebase = require("firebase");
	var searchMovie = ("search-movie");
	var gs = require("get-set");


	//Getting movie json data from omdbapi.com/being called from my-search
	return {
		
		//ajax call
		movies: function() {
			var deferred = Q.defer();
			var movieInput = $("#inputTitle").val().toLowerCase();
			
			
			// console.log("movie input", movieInput);
			$.ajax({url: "http://www.omdbapi.com/?s=" + movieInput + "&type=movie",
				method: "GET"
				})
				.done(function(data){
					console.log("movie-data", data);
						//resolving promise
						deferred.resolve(data);

					console.log("search", "http://www.omdbapi.com/?s=" + movieInput + "&type=movie");

				})
				.fail(function(){
					console.log("error");
					deferred.reject(error);
				});
				movieInput = $("#inputTitle").val("");
				//returning promise
				return deferred.promise;
		}
	};

});//end of define

