const express = require('express')
const Twitter = require('twitter')

const app = express()

const client = new Twitter({
  consumer_key: process.env.TWITTER_CK,
  consumer_secret: process.env.TWITTER_CS,
  access_token_key: process.env.TWITTER_ATK,
  access_token_secret: process.env.TWITTER_ATS
})

app.get('/tweets/:query', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.setHeader('Content-Type', 'application/json')

  client.get('search/tweets', { q: req.params.query }, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      console.log(tweets)
    }
    res.end(JSON.stringify(tweets))
  })
})

module.exports = app
