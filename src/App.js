import logo from "./logo.svg";
import "./App.css";
import DatesSelector from "./components/DatesSelector/DatesSelector";
import BitcoinChart from "./components/BitcoinChart.js/BitcoinChart";

function App() {
  return (
    <div className="App">
      <DatesSelector />
      <BitcoinChart />
    </div>
  );
}

export default App;
