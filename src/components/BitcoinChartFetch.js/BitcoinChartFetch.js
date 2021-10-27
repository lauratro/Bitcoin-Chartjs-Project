import React, { useState, useContext } from "react";
import { VariablesContext } from "../../context/VariablesContext";
import Chart from "../Chart/Chart";
import "./BitcoinChartFetch.css";

export default function BitcoinChartFetch() {
  const { startDate, finalDate } = useContext(VariablesContext);

  const [dateLabel, setDateLabel] = useState([]);
  const [bitcoinUsd, setBitcoinUsd] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [chartRender, setChartRender] = useState(true);

  let fetchBitcoinData = async () => {
    try {
      let response = await fetch(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${finalDate}`
      );
      let data = await response.json();

      setDateLabel(Object.keys(data.bpi));
      setBitcoinUsd(Object.values(data.bpi));
    } catch (err) {
      console.log(err);
    }
  };

  const data = {
    labels: dateLabel,
    datasets: [
      {
        label: "Usd",
        data: bitcoinUsd,
        fill: false,
        backgroundColor: "rgb(255,165,0)",
        borderColor: "rgba(255,165,0.2)",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  // The function checks that it won't be possible to select a startDate bigger than the final one
  let dateChecker = () => {
    if (finalDate > startDate) {
      fetchBitcoinData();
      setErrorText("");
      setChartRender(true);
    } else {
      setErrorText("The initial date has to be smaller than the final date");
      setChartRender(false);
    }
  };

  return (
    <div className="directCol">
      <div className="textCentr errorText">{errorText}</div>
      <button className="renderButton" onClick={() => dateChecker()}>
        Render
      </button>
      {chartRender && <Chart data={data} options={options} />}
    </div>
  );
}
