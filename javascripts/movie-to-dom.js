define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");
	
	return {
  		movieForm: function(data) {

	    	require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
	    		console.log("movieDataTemplate is running");
	    	
		      	$("#movie-poster").append(formTemplate(data));
		      	console.log("movie-to-dom", data);
		      	$("body").removeClass("modal-open");
		        $('.modal-backdrop').remove();
		        $(".watch-button").hide();
		        $("#links").hide();
		      
	    			});//end of require

	  	}//end of movieForm function
	};//end of return

});//end of define

