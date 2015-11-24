define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");
	
	return {
  		movieForm: function(data) {
  			console.log("movieForm is running", data)

		    require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
		    	console.log("what is going on", data)
		      	$("#movie-poster").html(formTemplate(data));
		      	$("body").removeClass("modal-open");
		        $('.modal-backdrop').remove();
		        $(".watch-button").hide();
		        $("#links").hide();
		        $("#inputTitle").val("");
		    	});

	  		}
		};

});//end of define

