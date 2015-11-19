define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");



	var ref = new Firebase("https://movie-history-app.firebaseio.com");

	//creating user
	$("#register").click(function(){
		console.log("button works");
		ref.createUser({
	  		email    : $("#email").val(),
	  		password : $("#password").val()
		}, function(error, userData) {
		  if (error) {
		    console.log("Error creating user:", error);
		  } else {
		    console.log("Successfully created user account with uid:", userData.uid);
		  	}
			});
		});

	//login with password
	$("#signIn").click(function(){
		ref.authWithPassword({
		  email    : $("#email").val(),
		  password : $("#password").val()
		}, function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
		});

});//end of define