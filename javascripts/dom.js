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
			require(["hbs!../templates/mainDefault"], function (mainLoad) {
				$("#main-content").html(mainLoad());
				console.log("mainLoad", mainLoad);
				$("body").removeClass("modal-open")
		        $('.modal-backdrop').remove();
			});
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
			require(["hbs!../templates/afterAdded"], function (add){
				$("#main-content").append(add);
				$(".add-button").hide();
				$(".watch-button").show();
			});
		}, 

		loadNavbar: function () {
			console.log("something is working")
			require(["hbs!../templates/navBar"], function (navigation) {
				$("#main-content").html(navigation);
			});
		}
	};
});

