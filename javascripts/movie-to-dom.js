define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");
	
	return {
  		movieForm: function(data) {
  			//TO use in handlebars helper template
  			// for (var i = 0; i < data.Search.length; i++){
	  		// 	if (data.Search[i].Poster !== "N/A") {

	    	require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
	    		console.log("movieDataTemplate is running");
	    	
		      	$("#movie-poster").html(formTemplate(data));
		      	console.log("movie-to-dom", data);
		      	$("body").removeClass("modal-open");
		        $('.modal-backdrop').remove();
		        $(".watch-button").hide();
		        $("#links").hide();
		      
	    		});//end of require

	  		}//end of movieForm function
		};//end of return

});//end of define

