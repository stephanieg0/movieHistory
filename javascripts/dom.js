
define(function (require) {
	var cat = 0;

	return {


		loadSplash: function () {
			console.log("is this working");
			require(["hbs!../templates/splash"], function (splashLoad) {
				console.log("working");
		        $("#main-content").html(splashLoad);
		        $('#myModal').modal("show");
			 });
		},
		loadMain: function () {
				$("#main-content").html("");
				$("body").removeClass("modal-open")
		        $('.modal-backdrop').remove();

		},

		findMovies: function() {
			console.log("hello");
			require(["hbs!../templates/findModal"], function (movieFind){
				$("#main-content").html(movieFind);
				$("#myModal2").modal("show");
			});
		},

		findMyMovies: function() {
			console.log("hello");
			require(["hbs!../templates/mySearch"], function (movieMyFind){
				$("#main-content").html(movieMyFind);
				$("#myModal3").modal("show");
			});
		},

		myAddedMovies: function() {
			console.log("whatever");

			$(".add-button").hide();
			$(".watch-button").show();
			$("#links").show();
		}, 
	};
});

