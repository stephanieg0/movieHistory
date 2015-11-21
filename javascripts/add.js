define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var gs = require("get-set");
	var Q = require("q");

	//have to return the function to the page view.
    return {
		//if email is not the correct format, promise will be rejected.
      	//else the promise will be resolved.
      	addInfo: function() {
      		var uuid = gs.getUid();
			//get a reference to our Firebase app
			var ref = new Firebase("https://movie-history-app.firebaseio.com/users/"+ uuid);
      		console.log("uuid", uuid);
			ref.push({
		  		"movie": "movie",
			}, function(error, userData) {
			  if (error) {
			  	alert(error);
			    console.log("Error creating user:", error);
			  } else {
			  	}
			});
			// console.log("authData", uuid.uid);
		}
	};
});