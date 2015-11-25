
define(function (require) {
	var cat = 0;

	return {


		loadSplash: function () {
			console.log("is this working");
			require(["hbs!../templates/splash"], function (splashLoad) {
				console.log("working");
		        $("#main-content").html(splashLoad);
			 });
		},

		loadMain: function () {
				$("#main-content").html("");
				$("div").removeClass("hidden");
		}
		

		// myAddedMovies: function() {
		// 	console.log("whatever");
		// 	$(this).hide();
		// 	$(this).show();
		// }, 
	};
});

