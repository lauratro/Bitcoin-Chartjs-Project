import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

export default function Chart({ data, options }) {
  return (
    <div className="externalContainer">
      <div className="chartContainer">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
