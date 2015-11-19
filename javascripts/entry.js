requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "q": "../lib/bower_components/q/q"
  },
  shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "firebase": { exports: "Firebase" }
    }
});

requirejs(
  
  ["dependencies", "user-create", "user-login"], 
  //^dependencies on dependencies.js

  //the dependencies get passed as arguments into the function.
  function(dependencies, userCreate, userLogin) {

 

 });//end of require