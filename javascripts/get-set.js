define(function(require){
	var $ = require("jquery");
	var Q = require("q");
	// var searchMovie = ("search-movie");

	var deferred = Q.defer();
	var userID = null;
	var userMovieData = null;
	//Getters and Setterss for UID and movie object
	return {
		// Getting current userID
		getUid: function() {
      		console.log("returning", userID);
      		return userID;
    	},
    	// Getting current userID
    	setUid: function(newId){
      		console.log("setting user id to ", newId);
      		userID = newId;
    	},
    	// Getting current userID
		getData: function() {
      		console.log("returning", userMovieData);
      		return userMovieData;
    	},
    	// Getting current userID
    	setData: function(newData){
      		console.log("setting user movie data to ", newData);
      		userMovieData = newData;
    	}
	};

});//end of define