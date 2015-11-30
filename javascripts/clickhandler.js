define(function(require) {
  //Dependencies for the create and login functions
  var create = require("user-create");
  var login = require("user-login");
  var add = require("add");
  var dom = require("dom");
  var showMovies = require("show-movies");
  var gs = require("get-set");
  var del = require("deleteMovie");
  var mr = require("movie-rating");
  var omdb = require("omdbAjax");
  var mw = require("movie-watchKey");
  
  
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

  // Unwatched will show unwatched movie posters on user profile to DOM 
  $("#unwatched").click(function(){
    // Getting user unique ID
    uuid = gs.getUid();
    // Resetting DOM
    $("#movie-poster").empty();
    // Referencing Fireabse
    var ref = new Firebase ("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");

    ref.orderByChild("watched").equalTo(false).on("child_added", function(snapshot) {
      console.log(snapshot.val());
      // Resetting DOM
      var snapKey = snapshot.key();
      var snapshot = snapshot.val();
      var title = snapshot.title;
      console.log("title", title);
      showMovies.unwatchedMovies({[snapKey]: snapshot});
    });
  });

  //Watched will show watched movie posters on user profile to DOM
  $("#watched").click(function(){
    // Getting user unique ID
    uuid = gs.getUid();
    $("#movie-poster").empty();
    // Referencing Fireabse
    var ref = new Firebase ("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");

    ref.orderByChild("watched").equalTo(true).on("child_added", function(snapshot) {
      console.log(snapshot.val());
      var snapKey = snapshot.key();
      var snapshot = snapshot.val();
      var title = snapshot.title;
      console.log("title", title);
      showMovies.watchedMovies({[snapKey]: snapshot});
    });
  });      

  // All button will show all movie posters on user profile to DOM
  $("#all").click(function(){
      // Getting user unique ID
      uuid = gs.getUid();
      // Resetting DOM
      $("#movie-poster").empty();
      // Referencing Fireabse
      var ref = new Firebase ("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");
      console.log("ref", ref);
      ref.orderByChild("watched").on("child_added", function(snapshot) {
      console.log(snapshot.val());
      var snapKey = snapshot.key();
      var snapshot = snapshot.val();
      var title = snapshot.title;
      console.log("title", title);
      showMovies.allMovies({[snapKey]: snapshot});
    });
  });

// Favorites button will show all favorited(5 stars) movie posters on user profile to DOM
  $("#favorites").click(function(){
      console.log("favorites click");
      // Getting user unique ID
      uuid = gs.getUid();
      // Resetting DOM
      $("#movie-poster").empty();
      // Referencing Fireabse
      var ref = new Firebase ("https://movie-history-app.firebaseio.com/users/" + uuid + "/movies");
      console.log("ref", ref);
      ref.orderByChild("stars").equalTo(5).on("child_added", function(snapshot) {
      console.log(snapshot.val());
      var snapKey = snapshot.key();
      var snapshot = snapshot.val();
      var title = snapshot.title;
      console.log("title", title);
      showMovies.allMovies({[snapKey]: snapshot});
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
      $("#movie-poster").empty();
      $("#nav-bar").hide();
      dom.loadSplash();
      console.log("you have logged out");
    });

  // User clicking add to have movie added to their profile
    $("body").on('click', ".add-button", function() {
      var imdb = $(this).attr("imdb");
      console.log("imdb", imdb);
      $(this).hide();
      console.log($(this))
      $(this).siblings(".watch-button").show();

      console.log("isss this working???", imdb);
      console.log("add click");
      add.addInfo(imdb);
    });  

  // User click will delete selected movie from Firebase and reload DOM
  $(document).on("click", "#delete", function(e) {
    console.log("delete button is working!!!!");
    console.log(this);
    // Removing selected item from Firebase
    var movieKey = $(this).attr('yep');
    console.log("movieKey", movieKey);
    del(movieKey);
  });

  //Watch button is clicked.
  $("body").on("click", ".watch-button", function(){
    console.log("watch button works, and shows stars");
    // console.log("this", this);
    var movieKey = $(this).attr('id');
    $(".watch-button").hide();
    // $(".star-container").show();
    console.log("movieKey", movieKey);
    mw(movieKey);
  });

  // More info modal
  $(document).on("click", ".movieCast", function(e)  {
    console.log("Movie info modal");    
    console.log(e.target);
    var movieID = this.id;
    console.log(movieID);

    omdb(movieID).then(function(movieData) {
      console.log("movieData", movieData);

      require(['hbs!../templates/moreInfoModal'], function (movieTemplate) {
            $(".movieInfo").html(movieTemplate(movieData));
          });
    });
  });

  //Stars clicked.
    $("body").on("click", ".star-container", function(){
      console.log("stars container is being clicked");
      // console.log("this", this);
      var starsKey = $(this).attr('id');
      console.log("starsKey", starsKey);

      mr(starsKey);

    });


});//end of define



