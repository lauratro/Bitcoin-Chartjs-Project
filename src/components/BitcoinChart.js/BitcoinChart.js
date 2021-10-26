import React, { useEffect, useState } from "react";

export default function BitcoinChart() {
  useEffect(() => {
    let fetchBitcoinData = async () => {
      try {
        let response = await fetch(
          "https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-10-20&end=2021-10-26"
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
