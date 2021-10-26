import React, { useEffect, useState, useContext } from "react";
import { VariablesContext } from "../../context/VariablesContext";
import Chart from "../Chart/Chart";

export default function BitcoinChartFetch() {
  const { startDate, setStartDate, finalDate, setFinalDate } =
    useContext(VariablesContext);

  const [dateLabel, setDateLabel] = useState([]);
  const [bitcoinUsd, setBitcoinUsd] = useState([]);
  useEffect(() => {
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
    fetchBitcoinData();
  }, [startDate, finalDate]);

  const data = {
    labels: dateLabel,
    datasets: [
      {
        label: "Usd",
        data: bitcoinUsd,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
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

  return (
    <div>
      <Chart data={data} options={options} />}
    </div>
  );
}
