define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");
	
	return {
  		movieForm: function(data) {
  			console.log("movieForm is running", data)

		    require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
		    	console.log("what is going on", data)
		      	$("#movie-poster").html(formTemplate(data));
		        $(".watch-button").hide();
		        $("#inputTitle").val("");
		    	});

	  		}
		};

});//end of define

