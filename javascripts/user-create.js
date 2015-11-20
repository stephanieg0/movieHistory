
define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var Q = require("q");

  	//make a variable to return a promise.
  	var deferred = Q.defer();
	//get a reference to our Firebase app
	var ref = new Firebase("https://movie-history-app.firebaseio.com");
	//have to return the function to the page view.
    return {
		//if email is not the correct format, promise will be rejected.
      	//else the promise will be resolved.
      	userCreate: function() {
			console.log("button works");
			ref.createUser({
		  		email    : $("#email").val(),
		  		password : $("#password").val()
			}, function(error, userData) {
			  if (error) {
			  	alert(error);
			    console.log("Error creating user:", error);
			  } else {
			    console.log("Successfully created user account with uid:", userData.uid);
			  	}
			});
		}
	};
});
