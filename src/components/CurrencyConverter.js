import axios from 'axios'
import React, { useState } from 'react'
import ExchangeRate from './ExchangeRate'

const CurrencyConverter = () => {

  const currencies = [ 'BTC', 'ETH', 'USD', 'XPR', 'LTC', 'ADA' ]
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD')
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(0)
  const [result, setResult] = useState(0)

  console.log(chosenPrimaryCurrency, chosenSecondaryCurrency)

  const convert = () => {
      const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    };
    
    axios.request(options).then((response) => {
      console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      console.log(response.data)
      setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount)
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className='CurrencyConverter'>
      <h2>Currency Converter!</h2>
        <div className=''>
        <table>
          <tbody>
          <tr>
            <td>Primary Currency:</td>
            <td>
              <input
                type="number"
                name="currencyAmt1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </td>
            <td>
              <select
                value={chosenPrimaryCurrency}
                name="currencyOpt1"
                className='currencyOptions'
                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
              >
                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
            </td>
          </tr>
          <tr>
            <td>Secondary Currency:</td>
            <td>
              <input
                name="currencyAmt2"
                value={result}
                disabled={true}
              />
            </td>
            <td>
              <select
                value={chosenSecondaryCurrency}
                name="currencyOpt2"
                className='currencyOptions'
                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
              >
                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
            </td>
          </tr>
          </tbody>
        </table>
        <button id='convert' onClick={convert}>Convert!</button>
        </div>
        
      <ExchangeRate 
        exchangeRate={exchangeRate}
      />
    </div>
  )
}

export default CurrencyConverter
