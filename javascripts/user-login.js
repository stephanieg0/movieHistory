define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");

	var ref = new Firebase("https://movie-history-app.firebaseio.com");

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