let express = require('express')
let request = require('request')
let querystring = require('querystring')

let app = express()

let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8888/callback'

app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID || 'a66593fe967e4ad9a6c77b630fc6e31a',
      scope: 'user-read-private user-read-email user-read-currently-playing user-modify-playback-state',
      redirect_uri
    }))
})

app.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        'a66593fe967e4ad9a6c77b630fc6e31a:80b9497e64314150bf9a261bf62ef563'
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    console.log(body)
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000/'
    res.redirect(uri +"access/"+ access_token)
  })
})

let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)