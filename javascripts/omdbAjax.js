define(function(require) {
  var Q = require("q");
  var $ = require("jquery");
  
  return function(imdbID) {
    var deferred = Q.defer();

    console.log("http://www.omdbapi.com/?i=" + imdbID);
    // passes in imdbID
    $.ajax({ url: "http://www.omdbapi.com/?i=" + imdbID + "&type=movie",
      method: "GET"
    })
      // XHR was successful
      .done(function(json_data) {
        // Resolve the promise and send the data
        deferred.resolve(json_data);
        console.log("omdb json_data", json_data);
      })
      // XHR failed for some reason
      .fail(function(xhr, status, error) {
        // We have to reject the promise
        deferred.reject(error);
      });

    return deferred.promise;
  };   
}); 