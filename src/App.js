import logo from "./logo.svg";
import "./App.css";
import DatesSelector from "./components/DatesSelector/DatesSelector";
import BitcoinChartFetch from "./components/BitcoinChartFetch.js/BitcoinChartFetch";

function App() {
  return (
    <div className="App">
      <h1 className="title">Bitcoin Line Chart</h1>
      <hr className="hr"></hr>
      <DatesSelector />
      <BitcoinChartFetch />
    </div>
  );
}

export default App;
