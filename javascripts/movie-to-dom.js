define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");
	
	return {
  		movieForm: function(data) {

		    require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
		      $("#movie-poster").html(formTemplate(data));
		        $(".watch-button").hide();
		    });
	    console.log("handle bars form is linked");

	  	}
	};

});

