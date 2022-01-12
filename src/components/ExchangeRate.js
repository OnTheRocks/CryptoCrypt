import React from 'react'

const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
  return (
    <div className='ExchangeRate'>
      <h2>Exchange Rate = {exchangeRate}</h2> 
      <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>    
    </div>
  )
}

export default ExchangeRate
