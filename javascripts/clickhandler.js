define(function(require) {
  //Dependencies for the create and login functions
  var create = require("user-create");
  var login = require("user-login");
  var add = require("add");
  var dom = require("dom");
  var showMovies = require("show-movies");
  var gs = require("get-set");
  
  // Ref to firebase
  var ref = new Firebase("https://movie-history-app.firebaseio.com/");
  // Declaring variable for later use
  var uuid;


  //If the promise resolved, the user will be able to move onto the form.
  //Shows form after user creates new account
  $("body").on('click', "#register", function() {
      console.log("register click");
      //promise from user-create.js
      create.userCreate()
      console.log("user created");
      dom.loadMain();

  });

  //Shows user's profile after user logs in
  $("body").on('click', "#signIn", function() {
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
    // Getting user unique ID
    uuid = gs.getUid();
    // Referencing Fireabse
    var ref = new Firebase ("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");

    ref.orderByChild("watched").equalTo(false).on("child_added", function(snapshot) {
      console.log(snapshot.key());
      showMovies.unwatchedMovies();
    });
  });

  //Watched will show watched movies 
  $("#watched").click(function(){
    // Getting user unique ID
    uuid = gs.getUid();
    // Referencing Fireabse
    var ref = new Firebase ("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");

    ref.orderByChild("watched").equalTo(true).on("child_added", function(snapshot) {
      console.log(snapshot.key());
      showMovies.watchedMovies();
    });
  });      

  // All button will show all movies on user profile
  $("#all").click(function(){
      // Getting user unique ID
      uuid = gs.getUid();
      // Referencing Fireabse
      var ref = new Firebase ("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");

      ref.orderByChild("watched").on("child_added", function(snapshot) {
      console.log(snapshot.key());
      showMovies.allMovies();
    });
  });

// All button will show all movies on user profile
  $("#favorites").click(function(){
    
      // Getting user unique ID
      uuid = gs.getUid();
      // Referencing Fireabse
      var ref = new Firebase ("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");

      ref.orderByChild("stars").equalTo("5").on("child_added", function(snapshot) {
      console.log(snapshot.key());
      showMovies.allMovies();
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
      var imdb = $(this).attr("imdb");
      $(this).hide();
      console.log($(this))
      $(this).siblings(".watch-button").show()

      console.log("isss this working???", imdb);
      console.log("add click");
      add.addInfo(imdb);
      console.log("???????????????", add.addInfo(imdb));
    });  



});

