define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var Q = require("q");
	var gs = require("get-set");


	//show stars after the watch button is clicked.
	$("body").on("click", ".watch-button", function(){
		console.log("watch button works, and shows stars");

		$(".watch-button").hide();
		$(".star-container").show();

		//gets the value of the selected star
		$(':radio').change(function(){
			$('.choice').text( this.value + ' stars' );
			var currentStars = this.value;
			console.log(currentStars, "stars");
			//firebase reference to upload to specific url
			var uuid = gs.getUid();
			console.log("uuid", uuid);
			var movieObject = gs.getData();
      		console.log("movieObject", movieObject);
      		// Getting movie title from movie object
      		var title = movieObject.Title;
      		console.log("title", title);

			//specific path to go to firebase
			var ref = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies/" + title);
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


		});


});//end of define
