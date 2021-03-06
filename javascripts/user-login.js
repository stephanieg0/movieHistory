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

  //returning function to the clickhandler.js for the login only
  return {
    //if email does not exist on firebase, promise will be rejected.
    //else promise will be resolved.
    userLogin: function() {
      ref.authWithPassword({
        email    : $('#email').val(),
        password : $('#password').val()
        }, function(error, authData) {
        if (error) {
          deferred.reject(error);
          console.log("Login Failed!", error);
          alert(error);
        } else {
          dom.loadMain();
          deferred.resolve(ref.authWithPassword);
          gs.setUid(authData.uid);
          console.log("Authenticated successfully with payload:", authData);
          console.log("Authenticated successfully with payload:", authData.uid);
          

        //need to pass ID info to new function to populate the Dom.
        // completeProfile.showProfile(authData.uid);
        }
      });
      return deferred.promise;
    }
  };//end login

});//end require

