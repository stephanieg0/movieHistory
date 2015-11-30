define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var Q = require("q");
	var gs = require("get-set");

		
 	return function(changeThisMovie){
 		console.log("changeThisMovie", changeThisMovie);
		//current user id
		var uuid = gs.getUid();
		console.log("uuid", uuid);
		//firebase reference to upload to specific url
		var ref = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies/" + changeThisMovie);
		//updating a watched value to true.
  		ref.update({
  			"watched": true
  		});

	};
});//end of define