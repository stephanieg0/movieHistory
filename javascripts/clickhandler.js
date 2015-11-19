define(function(require) {
  //dependencies for the create and login functions
  var create = require("user-create");
  var login = require("user-login");

//If the promise resolved, the user will be able to move onto the form.
//shows form after user creates new account
  $("body").on('click', "#register", function() {
    //promise from create-user.js
    create.userCreate()
    .then(function(){
      // Do stuff
    })
    .fail(function(){
      alert("error, the specified email is invalid");      
      });
  });//end of function

//shows user's profile after user logs in
   $("body").on('click', "#signIn", function() {
      //If promise is true, it calls the function and moves onto next template.
      //if promie fails, it errors and it does not move on.
      //promise from login.js
      login.userLogin()
      .then(function(){
        //Do stuff
      })
      .fail(function(){
        alert("Please make an account");  
      });
    });//end of function
});   