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
				})
				.done(function(data){

					data.poster = "http://img.omdbapi.com/?i=" + data.imdbID + "&apikey=8513e0a1";
					//resolving promise
					deferred.resolve(data);
					// deferred.resolve("http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&r=json");
					console.log("data", data);
					console.log("data poster", data.poster);
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

