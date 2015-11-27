define(function(require) {
	var gs = require("get-set");
	var Q = require("q");	

 	return function(deleteThisMovie){
 		console.log("deleteThisMovie", deleteThisMovie);
		// Getting unique user ID
		var uuid = gs.getUid();
		// Ref to Firebase
		var ref = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");
		// Deleting selected movie
		ref.child(deleteThisMovie).remove();	 
	 };
 });