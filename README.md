# spotify-smart-suggest
a node js app that looks at your song and creates a playlist of songs that are similar that you've never heard before

## References
Wrapper for spotify api:  
https://github.com/thelinmichael/spotify-web-api-node  

Spotify web-api official documentation:  
https://developer.spotify.com/documentation/web-api/  

Trello board for this project:  
https://trello.com/b/SvSI29oR/spotify-smart-suggest  

### Last Update
10/20/2018

### Development
#### Front End (frontend)
Currently frontend is running on port 3000 (since back end forwards to 3000, can be changed), you can change behavior by modifying the config file in `config/dev.env.js`
```
cd frontend
npm install
npm run dev
```

#### Back End (backend)
Currently backend is running on port 8888, you can change the behavior in server.js.
```
cd backend
npm install
npm start
```
