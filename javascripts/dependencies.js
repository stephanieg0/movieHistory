define(function(require){
	var $ = require("jquery");
	var hbs = require("hbs");
	var bootstrap = require("bootstrap");
	var lodash = require("lodash");
	var Firebase = require("firebase");
	var Q = require("q");
	var hbsFull = require("hbs/handlebars");


	 //helper for stars
    hbsFull.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
      });

});

