import React from "react";
import { Bar } from "react-chartjs-2";
import "./Chart.css";

export default function Chart({ data, options }) {
  return (
    <div className="externalContainer">
      <div className="chartContainer">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
