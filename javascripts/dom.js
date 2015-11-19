define(function (require) {

	return {
		// loadSplash: function () {
		// 	require(["hbs!../templates/splash"], function (splashLoad) {
		//         $("#main-content").html(splashLoad);
		//         console.log("load splash", splashLoad());
		// 	});
		// },

		loadMain: function () {
			require(["hbs!../templates/mainDefault"], function (mainLoad) {
				$("#main-content").html(mainLoad);
				console.log("mainLoad", mainLoad);
			})
		}

	}
});