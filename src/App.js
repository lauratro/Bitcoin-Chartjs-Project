import logo from "./logo.svg";
import "./App.css";
import DatesSelector from "./components/DatesSelector/DatesSelector";
import BitcoinChartFetch from "./components/BitcoinChartFetch.js/BitcoinChartFetch";

function App() {
  return (
    <div className="App">
      <DatesSelector />
      <BitcoinChartFetch />
    </div>
  );
}

export default App;
