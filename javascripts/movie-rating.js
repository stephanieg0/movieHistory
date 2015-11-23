define(function(require){
	var $ = require("jquery");
	var Firebase = require("firebase");
	var Q = require("q");
	var gs = require("get-set");


	//show stars after the watch button is clicked.
	$("body").on("click", ".watch-button", function(){
		console.log("watch button works, and shows stars");
		$(".star-container").show();

		//gets the value of the selected star
		$(':radio').change(function(){
			$('.choice').text( this.value + ' stars' );
			var currentStars = this.value;
			console.log(currentStars, "stars");
			//firebase reference to upload to specific url
			var uuid = gs.getUid();
			console.log("uuid", uuid);
			
			var ref = new Firebase("https://movie-history-app.firebaseio.com/users/" + uuid + "/");
			// var movieKey = ref.child("ref");
			// var path = movieKey.toString();
			// console.log("path", path);
			//pushing the key to firebase
			ref.push({
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
