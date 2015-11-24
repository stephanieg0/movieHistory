define(function(require){
	var $ = require("jquery");
	var Q = require("q");
	var Firebase = require("firebase");
	var searchMovie = ("search-movie");
	var gs = require("get-set");



	return {
		// var deferred;
		moviesFirebase: function () {
			var deferred = Q.defer();
			var uuid = gs.getUid();
			var movieRef = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");

			movieRef.once("value", function (snapshot){
			var firebaseData = snapshot.val();
			deferred.resolve(firebaseData);
			console.log("firebase data", firebaseData);
			});
			return deferred.promise;
		}
	}




});//end of define