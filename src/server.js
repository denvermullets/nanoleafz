const express = require('express')
const fetch = require("node-fetch");
const app = express()
const port = 5000

app.get('/', (req, res) => {
  fetch('https://api.waxchromatics.com/api/v1/albums')
    .then(response => response.json)
    .then(jsonResp => res.send({ jsonResp }))
    .catch(err => res.send(err))
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})