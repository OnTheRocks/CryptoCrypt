import Converter from "./components/Converter";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import CurrencyConverter from "./components/CurrencyConverter";
import News from "./components/News";
// import NewsFeed from "./components/NewsFeed";


const App = () => {
  return (
    <div className="App">     
      <h1 className="title">CryptoCrypt</h1>
      {/* <div className="app-wrapper">
        <CurrencyConverter />  
        <NewsFeed />   
      </div> */}
      <div className="app-wrapper">
        <div className="box box1">
          <Converter />
        </div>
        <div className="box box2">
          <News />
        </div>
      </div>
      
Photo by Karolina Grabowska from Pexels

    </div>
  );
}

export default App;

