
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
				$("#nav-bar").show();
				$("#main-content").html("");
				$("div").removeClass("hidden");
		}
	};
});

