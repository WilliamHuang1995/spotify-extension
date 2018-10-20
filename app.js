var SpotifyWebApi = require('spotify-web-api-node');
var config = require('./config')

var scopes = ['user-read-private', 'user-read-email'],
  redirectUri = 'http://www.example.com/callback',
  clientId = config.clientId,
  state = 'william';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: config.redirectUri,
  clientId: config.clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);