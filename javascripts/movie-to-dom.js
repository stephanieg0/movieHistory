define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");
	
	return {
  		movieForm: function(data) {
  			//Need to use in handlebars helper template add and if statement to print titles or posters
  			// for (var i = 0; i < data.Search.length; i++) {
	  		// 	if (data.Search[i].Poster === "N/A") {
	  		// 		// data.Search[i].Poster = 0;
	  		// 		console.log("data.Search[i].Poster", data.Search[i].Poster);
	    // 		}else {
	  			

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

