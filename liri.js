require("dotenv").config();

var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);

//   * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

var request = require("request");

// Run the request function...
// The request function takes in a URL then returns three arguments:
// 1. It provides an error if one exists.
// 2. It provides a response (usually that the request was successful)
// 3. It provides the actual body text from the website <---- what actually matters.
request( "http://www.omdbapi.com/?i=tt3896198&apikey=d3783854", function(error, response, body) {

  // If the request was successful...
  if (!error && response.statusCode === 200) {

    // Then log the body from the site!
    console.log(body);
  }
});
