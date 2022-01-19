import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Converter = () => {

  const currencies1 = [ 'BTC', 'ETH', 'DOGE', 'XPR', 'LTC', 'ADA' ]
  const currencies2 = [ 'USD', 'BTC', 'ETH', 'DOGE', 'XPR', 'LTC', 'ADA' ]

  const convert = () => {

  }

  return (
    <div className="container-lg  ">
      

      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-normal">Currency Converter</h1>
        <p className="col-md-8 fs-4"></p>
          <div className="card text-white bg-secondary mb-3 card-1">
            <div className="card-body">
              <h5 className="card-title">Choose a Crypto Currency and convert it into another currency.</h5>
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
                  id="inputGroup-sizing-default">Secondary Currency:</span>
                <input 
                  className="form-control" 
                  disabled={true}
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-default"/>
                <select 
                  className="form-select currencyOpts" 
                  // value={} name="currencyOpt1" 
                  aria-label="Default select example"
                  // onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >{currencies2.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </div>
              <button className="btn btn-success btn-sm" id='convert' type="button" onClick={convert}>Convert</button>
            </div>
          </div>
        
      </div>
    </div>


    


    </div>

    


  )
}

export default Converter
