define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var Q = require("q");
	var gs = require("get-set");

		
 	return function(movieKey){
 		console.log("movieKey", movieKey);
		//current user id
		var uuid = gs.getUid();
		console.log("uuid", uuid);
		//firebase reference to upload to specific url
		var ref = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies/" + movieKey);
		
		$(':radio').change(function(movieKey){
      	$('.choice').text( this.value + ' stars' );
      	var starsValue = this.value;
      	var starsValueNumber = parseInt(starsValue)
      	console.log(starsValueNumber, "stars");

			//updating the star value in firebase
			ref.update({
				"stars": starsValueNumber
				}, function(error, userData){
					if (error) {
						alert(error);
					} else {
						console.log("on firebase");
					}	
				});
		});
	};
});//end of define
