define(function(require){
	var $ = require("jquery");
	var Q = require("q");
	var Firebase = require("firebase");
	var searchMovie = ("search-movie");
	var gs = require("get-set");



	return {
		// call to firebase data
		moviesFirebase: function () {
			var deferred = Q.defer();
			var uuid = gs.getUid();
			var movieInput = $("#inputTitle").val();
			// console.log("movie input", movieInput);
			var movieRef = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");
			// var firebaseData = movieRef.orderByChild("title").equalTo(movieInput);
			
			var firebaseKeys = movieRef.orderByKey().equalTo(movieInput);
			firebaseKeys.once("value", function(snapshot) {
				var firebaseData = snapshot.val();
				console.log("snapshot", firebaseData);
				deferred.resolve({Search: firebaseData});
				
			});

			

			//have the title input match the title key in firebase.
			//get key parent from that title key to use in url.
			// movieRef.once("value", function (snapshot){
			// var firebaseData = snapshot.val();

		
			// });
			return deferred.promise;
		}
	}




});//end of define