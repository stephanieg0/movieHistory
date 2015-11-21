define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");
	
	return {
  		movieForm: function(data) {

		    require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
		      $("#main-content").html(formTemplate(data));
		      	$("body").removeClass("modal-open");
		        $('.modal-backdrop').remove();
		    });
	    console.log("handle bars form is linked");

	  	}
	};

});

