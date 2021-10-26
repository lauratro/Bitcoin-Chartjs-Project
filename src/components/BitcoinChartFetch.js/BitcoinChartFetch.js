import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function BitcoinChartFetch() {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    let fetchBitcoinData = async () => {
      try {
        let response = await fetch(
          "https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-10-20&end=2021-10-22"
        );
        let data = await response.json();
        console.log("data", data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBitcoinData();
  }, []);

  return <div></div>;
}
