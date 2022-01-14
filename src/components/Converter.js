import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Converter = () => {

  const currencies1 = [ 'BTC', 'ETH', 'DOGE', 'XPR', 'LTC', 'ADA' ]

  return (
    <div className="container-lg text-white bg-dark mb-3">
      <div className="card text-white bg-secondary mb-3 card-1">
        <div className="card-body">
          <h5 className="card-title">Currency Converter!</h5>
          <div className="input-group mb-3">
            <span 
              className="input-group-text" 
              id="inputGroup-sizing-default">Primary Currency:</span>
            <input 
              type="number" 
              className="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"/>
            <select 
              className="form-select currencyOpts" 
              // value={} name="currencyOpt1" 
              aria-label="Default select example"
              // onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
              >{currencies1.map((currency, _index) => (<option key={_index}>{currency}</option>))}
            </select>
          </div>            
          <div className="input-group mb-3">  
            <span 
              className="input-group-text" 
              id="inputGroup-sizing-default">Primary Currency:</span>
            <input 
              type="number" 
              className="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"/>
            <select 
              className="form-select currencyOpts" 
              // value={} name="currencyOpt1" 
              aria-label="Default select example"
              // onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
              >{currencies1.map((currency, _index) => (<option key={_index}>{currency}</option>))}
            </select>
          </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  )
}

export default Converter
