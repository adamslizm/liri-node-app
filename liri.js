require("dotenv").config();


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <47504b85f3554897b549829bfb2edc9d>,
  secret: <12bb62cb7ebe44af8076ba6fbcd2d7ea>
});
 

function getSong() {
	var 
spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data);

});



function getTweets(){

}

function getSong() {

}

function getMovie() {

}

// * `do-what-it-says`

var request = require("request");

request( "http://www.omdbapi.com/?i=tt3896198&apikey=d3783854", function(error, response, body) {

  if (!error && response.statusCode === 200) {
    console.log(body);
  }
});
