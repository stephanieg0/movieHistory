define(function (require) {

	return {
		loadSplash: function () {
			console.log("is this working");
			require(["hbs!../templates/splash"], function (splashLoad) {
				console.log("working");
		        $("#main-content").html(splashLoad);
		        $('#myModal').modal("show");
		 //        console.log("load splash", splashLoad());
			 });
		},

	};
});
