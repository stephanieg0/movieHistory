define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");
	
	return {
  		movieForm: function(data) {
  			// console.log("data.lenght", data.Search.length);

  			for (var i = 0; i < data.Search.length; i++){
  				console.log("data.Search[i].Poster", data.Search[i].Poster);

	  			if (data.Search[i].Poster !== "N/A") {
			    	require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
			    		console.log("movieDataTemplate is running");
			    	
				      	$("#movie-poster").html(formTemplate(data));
				      	// $("body").removeClass("modal-open");
				       //  $('.modal-backdrop').remove();
				       //  $(".watch-button").hide();
				       //  $("#links").hide();
				        // $("#inputTitle").val("");
			    		});//end of require

		  			} else {
		  			require(['hbs!../templates/movieDataTemplate-titles'], function (formTemplate) {
		  				console.log("titles template is running");
			    	
				      	$("#movie-title").html(formTemplate(data));
				      	// $("body").removeClass("modal-open");
				       //  $('.modal-backdrop').remove();
				       //  $(".watch-button").hide();
				       //  $("#links").hide();
				        // $("#inputTitle").val("");
			    		});//end of require

		  			}//end of else
	  		}//end of loop
	  		}//end of movieForm function
		};//end of return

});//end of define

