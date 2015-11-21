define(function(require){
	var $ = require("jquery");
	//gets the value of the selected star
	$(':radio').change(function(){
		$('.choice').text( this.value + ' stars' );
		console.log("value", this.value);
		console.log("choice", $(".choice"));
	});


});