define(function(require) {
	var $ = require("jquery");
	var hbs = require("hbs");

 return {
  	movieForm: function(data) {
  		$("#movie-poster").html('');
    require(['hbs!../templates/movieDataTemplate'], function (formTemplate) {
      $("#movie-poster").html(formTemplate(data));
    });
    console.log("handle bars form is linked");

  }
}

});