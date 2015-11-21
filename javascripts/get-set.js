define(function(require){
	var $ = require("jquery");
	var Q = require("q");

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
    	// Setting current userID, coming from user-create or user-login
    	setUid: function(newId){
      		console.log("setting user id to ", newId);
      		userID = newId;
    	},
    	// Getting current movieObject
		getData: function() {
      		console.log("returning", userMovieData);
      		return userMovieData;
    	},
    	// Setting current movieObject, coming from search-movie
    	setData: function(newData){
      		console.log("setting user movie data to ", newData);
      		userMovieData = newData;
    	}
	};

});//end of define