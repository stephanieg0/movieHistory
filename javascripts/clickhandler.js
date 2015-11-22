define(function(require) {
  //Dependencies for the create and login functions
  var create = require("user-create");
  var login = require("user-login");
  var add = require("add");
  var dom = require("dom");

  // Ref to firebase
  var ref = new Firebase("https://movie-history-app.firebaseio.com/");

  //If the promise resolved, the user will be able to move onto the form.
  //Shows form after user creates new account
  $("body").on('click', "#register", function() {
    // $("#register").click(function(){
      console.log("register click");
      //promise from user-create.js
      create.userCreate().then(function(){
        console.log("user created");
        // Do stuff
      })
      .fail(function(){
        alert("error, the specified email is invalid");      
      });
  });

  //Shows user's profile after user logs in
  $("body").on('click', "#signIn", function() {
    // $("#signIn").click(function(){
      console.log("sign click");
      //If promise is true, it calls the function and moves onto next template.
      //if promie fails, it errors and it does not move on.
      //promise from user-login.js
      login.userLogin().then(function(){
        console.log("user logged in");
        //Do stuff
        dom.loadMain();
      })
      .fail(function(error){
        console.log("error", error)
        alert("Please make an account");  
      });
    });

  //Add button will add movie to users account, default is unwatched
    // $("body").on('click', "#add", function(){
    $("body").on('click', ".add-button", function(){
      // Do stuff
      // Will set the watched key to false
    });

  //Unwatched will show unwatched movies 
    // $("body").on('click', "#unwatched", function(){
      // Do stuff
    // });

  //Watched will show watched movies 
    // $("body").on('click', "#watched", function(){
      // Do stuff
      // Will set the watched key to true
    // });

  $("body").on("click", "#find-movies", function(){
          dom.findMovies();
    })

  // Logging out
  $("body").on('click', "#logout", function() {
    // $("#logout").click(function(){
      console.log("click log out");
      ref.unauth();
      console.log("you have logged out");
    });

  // User clicking add to have movie added to their profile
    $("body").on('click', ".add-button", function() {
      console.log("add click");
      add.addInfo()
      .then(function(){
        console.log("user logged in");
      //Do stuff
      })
      .fail(function(){
        alert("Please make an account");  
      });
    });  



});



