const Rate = ({exchangedData}) => {
  return (
    <div className="card text-white  mb-3 rateCard">
        <div className="card-body">
          <h3 className="card-title">Exchange Rate</h3>
          <h1 className="card-title">{exchangedData.exchangeRate}</h1>
         
          <p className="card-text">{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
        </div>
      </div>
  )
}

export default Rate