const PORT = process.env.PORT || 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use(cors())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
  res.json("HOWDY!")
})

app.get('/news', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://crypto-update-live.p.rapidapi.com/news',
    headers: {
      'x-rapidapi-host': 'crypto-update-live.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
    }
  }
  axios.request(options).then((response) => {
    res.json(response.data)
    
  }).catch((error) => {
    console.error(error)
  });
})

app.get('/rate', (req, res) => {
  const fromCurrency = req.query.from_currency
  const toCurrency = req.query.to_currency
  console.log("Converting", fromCurrency, "to", toCurrency)
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {to_currency: toCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: fromCurrency},
    headers: {
      'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
    }
  };
  
  axios.request(options).then((response) => {
    res.json(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
   

  }).catch((error) => {
    console.error(error)
  })
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})