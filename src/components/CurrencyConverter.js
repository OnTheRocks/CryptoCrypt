import axios from 'axios'
import React, { useState } from 'react'
import ExchangeRate from './ExchangeRate'

const CurrencyConverter = () => {

  const currencies1 = [ 'BTC', 'ETH', 'DOGE', 'XPR', 'LTC', 'ADA' ]
  const currencies2 = [ 'USD', 'BTC', 'ETH', 'DOGE', 'XPR', 'LTC', 'ADA' ]
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD')
  const [amount, setAmount] = useState(1)
  // const [exchangeRate, setExchangeRate] = useState(0)
  const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC')
  const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('USD')
  const [result, setResult] = useState(0)
  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: 'BTC',
    secondaryCurrency: 'USD',
    exchangeRate: 0
  })

  console.log(chosenPrimaryCurrency, chosenSecondaryCurrency)

  const convert = () => {
      const options = {
      method: 'GET',
      url: 'http://localhost:8000/rate',
      params: {to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency},
     }
    
    axios.request(options).then((response) => {
      console.log(response.data)
      console.log(response.data)
      // setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setResult(response.data*amount)
      // setPrimaryCurrencyExchanged(chosenPrimaryCurrency)
      // setSecondaryCurrencyExchanged(chosenSecondaryCurrency)
      setExchangedData({
        primaryCurrency: chosenPrimaryCurrency,
        secondaryCurrency: chosenSecondaryCurrency,
        exchangeRate: response.data
      })
    }).catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className='CurrencyConverter'>
      <h2>Currency Converter!</h2>
        <div className='input-box'>
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
                {currencies1.map((currency, _index) => (<option key={_index}>{currency}</option>))}
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
                {currencies2.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
            </td>
          </tr>
          </tbody>
        </table>
        <button id='convert' onClick={convert}>Convert!</button>
        </div>
        
      <ExchangeRate 
        exchangedData={exchangedData}
        // chosenPrimaryCurrency={primaryCurrencyExchanged}
        // chosenSecondaryCurrency={secondaryCurrencyExchanged}
      />
    </div>
  )
}

export default CurrencyConverter
