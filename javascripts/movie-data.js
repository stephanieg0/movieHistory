define(function(require){
	var $ = require("jquery");
	var Q = require("q");
	var searchMovie = ("search-movie");

	var deferred = Q.defer();

	//Getting movie json data from omdbapi.com
	return {
		
		//ajax call
		movies: function() {
			var movieInput = $("#inputTitle").val();
			$.ajax({url: "http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&r=json",
				method: "GET",
				data: JSON.stringify("http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&r=json")
				})
				.done(function(){
					//resolving promise
					deferred.resolve("http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&r=json");
					console.log("http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&r=json");
				})
				.fail(function(){
					console.log("error");
					deferred.reject(error);
				});
				//returning promise
				return deferred.promise;
		}
	}

});//end of define