define(function(require){
	var $ = require("jquery");
	var Q = require("q");
	// var searchMovie = ("search-movie");

	var deferred = Q.defer();
	var userID = null;
	//Getting movie json data from omdbapi.com
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
    	}
	};

});//end of define