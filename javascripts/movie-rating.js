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

		//Get the value of the selected star
		$(':radio').change(function(){
			$('.choice').text( this.value + ' stars' );
			var currentStars = this.value;
			console.log(currentStars, "stars");

			//updating the star value in firebase
			ref.update({
				"stars": currentStars
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
