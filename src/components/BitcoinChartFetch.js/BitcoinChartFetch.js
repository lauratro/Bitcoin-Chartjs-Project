import React, { useEffect, useState, useContext } from "react";
import { VariablesContext } from "../../context/VariablesContext";
import Chart from "../Chart/Chart";
import "./BitcoinChartFetch.css";

export default function BitcoinChartFetch() {
  const { startDate, setStartDate, finalDate, setFinalDate } =
    useContext(VariablesContext);

  const [dateLabel, setDateLabel] = useState([]);
  const [bitcoinUsd, setBitcoinUsd] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [chartRender, setChartRender] = useState(true);
  // useEffect(() => {
  let fetchBitcoinData = async () => {
    try {
      let response = await fetch(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${finalDate}`
      );
      let data = await response.json();
      console.log("data", data.bpi);
      let labels = await setDateLabel(Object.keys(data.bpi));
      let bitcoin = await setBitcoinUsd(Object.values(data.bpi));
      console.log("key", dateLabel);
      console.log("coin", bitcoinUsd);
    } catch (err) {
      console.log(err);
    }
  };
  // }, [startDate, finalDate]);

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

  let dateChecker = async () => {
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
