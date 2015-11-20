define(function (require) {

	return {

		loadMain: function () {
			require(["hbs!../templates/mainDefault"], function (mainLoad) {
				$("#main-content").html(mainLoad);
				console.log("mainLoad", mainLoad);
			});
		}

	};
});
		loadSplash: function () {
			console.log("is this working");
			require(["hbs!../templates/splash"], function (splashLoad) {
				console.log("working");
		        $("#main-content").html(splashLoad);
		        $('#myModal').modal("show");
			 });
		}
	};
});
