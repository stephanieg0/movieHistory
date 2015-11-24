define(function (require) {

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
				$("div").removeClass("hidden");
		},

		findMovies: function() {
			console.log("hello");
			require(["hbs!../templates/findModal"], function (movieFind){
				$("#main-content").html(movieFind);
			});
		},

		myAddedMovies: function() {
			console.log("whatever");
			require(["hbs!../templates/afterAdded"], function (add){
				$("#main-content").append(add);
				$(".add-button").hide();
				$(".watch-button").show();
				$("#links").show();
			});
		}, 
	};
});

