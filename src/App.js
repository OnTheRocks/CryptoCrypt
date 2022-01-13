import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/NewsFeed";


const App = () => {
  return (
    <div className="App">     
      <h1>CryptoCrypt</h1>
      <div className="app-wrapper">
        <CurrencyConverter />  
        <NewsFeed />   
      </div>
    </div>
  );
}

export default App;

