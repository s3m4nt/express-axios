// import express
const express = require('express')
// import axios
const axios = require('axios')
// declare instance of app
const app = express()

// open up a port for app to listen on
const PORT = 3000

// create home route
app.get('/', (req, res) => {
  axios
    .get('http://www.omdbapi.com/?i=tt3896198&apikey=')
    .then((responseFromAPI) => {
      console.log(responseFromAPI.data.Production)
      res.send(responseFromAPI.data.Production)
      // res.send(responseFromAPI.data.Awards)
    })
    .catch((err) => {
      console.log(err)
    })
  // res.send(`<h1>Hello, PORT: ${PORT}</h1>`)
})

//
//
app.listen(PORT, () => {
  console.log(`🎧 Listening at http://localhost:${PORT} 🎧 `)
})
