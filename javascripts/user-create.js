
define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var gs = require("get-set");
	var Q = require("q");
	var dom = require("dom");


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
      			var ref = new Firebase("https://movie-history-app.firebaseio.com/users/" + userData.uid);
			  if (error) {
			  	alert(error);
			    console.log("Error creating user:", error);
			  } else {
			  	dom.loadMain();
        		console.log("inside");
        		ref.set({
          			"user_uid": userData.uid
        		});
        		gs.setUid(userData.uid);
			    console.log("Successfully created user account with uid:", userData.uid);
			  	}
			});
		}
	};
});

