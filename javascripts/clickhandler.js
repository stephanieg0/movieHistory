define(function(require) {
  //Dependencies for the create and login functions
  var create = require("user-create");
  var login = require("user-login");
  var add = require("add");
  var dom = require("dom");
  var showMovies = require("show-movies");

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

  // Unwatched will show unwatched movies 
  $("#unwatched").click(function(){
      // Setting variable for later use
      var watched;
      // Ajax call to get firebase movie objects
      showMovies.showAllMovies()
      .then(function(data){
          watched = data.watched;
          $.each(users, function(key, value){
            if (watched === false)
              showMovies.watchedMovies();
          })
      });
  });

  //Watched will show watched movies 
  $("#watched").click(function(){
      // Setting variable for later use
      var watched;
      // Ajax call to get firebase movie objects
      showMovies.showAllMovies()
        // Resolving Promise
        .then(function(data){
          watched = data.watched;
          $.each(users, function(key, value){
            if (watched === true)
              showMovies.watchedMovies();
          })
      });
  });      

  // All button will show all movies on user profile
  $("#all").click(function(){
      // Setting variable for later use
      var watched;
      // Ajax call to get firebase movie objects
      showMovies.showAllMovies()
        // Resolving Promise
        .then(function(data){
          showMovies.allMovies()
        })
        .fail(function(){
        alert("Error loading movies");  
        });  
  });


  // Find movies button
  $("body").on("click", "#find-movies", function(){
          dom.findMovies();

    });
  // Search My movies button
  $("body").on("click", "#search-movies", function(){
          // Displaying template to DOM
          dom.findMyMovies();
    });


  // Logging out
  $("body").on('click', "#logout", function() {
    console.log("what is this");
    // $("#logout").click(function(){
      console.log("click log out");
      ref.unauth();
      dom.loadSplash();
      console.log("you have logged out");
    });

  // User clicking add to have movie added to their profile
    $("body").on('click', ".add-button", function() {
      console.log("add click");

      add.addInfo()
      // .then(function(){
      //   console.log("user logged in");
      // dom.myAddedMovies();


      //Do stuff
      // })
      // .fail(function(){
      //   alert("Please make an account");  
      // });
    });  



});



