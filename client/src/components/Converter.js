import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
// import ExchangeRate from './ExchangeRate'
// import Rate from './Rate'

const Converter = () => {

  const currencies1 = [ 'BTC', 'ETH', 'DOT', 'XRP', 'LTC', 'ADA' ]
  const currencies2 = [ 'USD', 'BTC', 'ETH', 'DOT', 'XRP', 'LTC', 'ADA' ]
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD')
  const [amount, setAmount] = useState(1)
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
      url: '/rate',
      params: {to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency},
     }
   
    axios.request(options).then((response) => {
      console.log(response.data)
      console.log(response.data)
      setResult(response.data*amount)
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
    <div className="convertContainer"> 
      <div className="p-5 mb-4 rounded-3">
      <div className="container-fluid py-5">
        <h1 className='header'>Currency Converter</h1>
        <p className="col-md-8 fs-4"></p>
          <div className="card text-white  mb-3 converterCard">
            <div className="card-body">
              <h5 className="card-title">Choose a Crypto Currency and convert it into another currency.</h5>
              <div className="input-group mb-3">
                <span 
                  className="input-group-text" 
                  id="inputGroup-sizing-default">Currency 1:</span>
                <input 
                  type="number" 
                  className="form-control" 
                  name='currencyOpt1'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default"/>
                <select 
                  className="form-select currencyOpts" 
                  value={chosenPrimaryCurrency} 
                  name="currencyOpt1" 
                  aria-label="Default select example"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >{currencies1.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </div>            
              <div className="input-group mb-3">  
                <span 
                  className="input-group-text" 
                  id="inputGroup-sizing-default">Currency 2:</span>
                <input 
                  className="form-control" 
                  name='currencyAmt2'
                  value={result}
                  disabled={true}
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default"/>
                <select 
                  className="form-select currencyOpts" 
                  value={chosenSecondaryCurrency} 
                  name="currencyOpt2" 
                  aria-label="Default select example"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  >{currencies2.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </div>
              <h3 className="card-title">Exchange Rate</h3>
              <h1 className="card-title">{exchangedData.exchangeRate}</h1>         
              <p className="card-text">{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
              <button className="btn btn-success btn-sm" id='convert' type="button" onClick={convert}>Convert</button>
            </div>
          </div>
      </div>    
      </div>
    </div>
  )
}

export default Converter