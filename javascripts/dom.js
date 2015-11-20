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
			})
		},
  	movieForm: function(data) {
    require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
      $("#main-content").html(formTemplate(data));
    });
		}
	};
});

