define(function (require) {

	return {
		loadSplash: function () {
			require(["hbs!../templates/splash"], function (splashLoad) {
		        $("#main-content").html(splashLoad);
		        console.log("load splash", splashLoad());
			});
		},

	}
});
