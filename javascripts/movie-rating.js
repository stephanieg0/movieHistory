define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var Q = require("q");
	var gs = require("get-set");


	//Watch button is clicked.
	$("body").on("click", ".watch-button", function(){
		console.log("watch button works, and shows stars");
		//watch button needs to hide. 
		$(".watch-button").hide();
		//stars show up after watch button is clicked.
		$(".star-container").show();

		//importing data and set variables.
		//current user id
		var uuid = gs.getUid();
		console.log("uuid", uuid);
		//current object for movie
		var movieObject = gs.getData();
  		console.log("movieObject", movieObject);
  		// Getting movie title from movie object
  		var title = movieObject.Title;
  		console.log("title", title);

		//firebase reference to upload to specific url
		var ref = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies/" + title);
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


		});


});//end of define
