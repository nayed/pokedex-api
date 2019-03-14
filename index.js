const express = require('express')
const app = express()

app.get('*', (req, res) => {
  res.write('<h1>Nope</h1>')
  res.write('<h2>Go to /tweets/[pokemon_name]</h2>')
  res.end()
})

module.exports = app
