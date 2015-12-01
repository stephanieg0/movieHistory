define(function(require) {
	var gs = require("get-set");
	var Q = require("q");	

 	return function(deleteThisMovie){
 		console.log("deleteThisMovie", deleteThisMovie);
		// Getting unique user ID
		var uuid = gs.getUid();
		// Ref to Firebase
		var ref = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies/" + deleteThisMovie);
		// Deleting selected movie --old
		// ref.child(deleteThisMovie).remove();	--old

		//seting an inactive key on firebase to be able to filter later in the dom.
		//This movie should stay in firebase, but not visible in the dom.
		console.log("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies/" + deleteThisMovie);	
		//updating the value in firebase
		ref.update({
			"inactive": true
			}, function(error, userData){
				if (error) {
					alert(error);
				} else {
					console.log("on firebase");
				}	
			});
	 };
 });