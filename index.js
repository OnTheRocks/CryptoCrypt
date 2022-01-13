const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use(cors())

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
  const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {to_currency: 'USD', function: 'CURRENCY_EXCHANGE_RATE', from_currency: 'BTC'},
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

app.listen(8000, () => console.log('Server is running on port ${PORT}' ))