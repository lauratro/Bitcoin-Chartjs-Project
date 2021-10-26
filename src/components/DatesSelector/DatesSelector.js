import React, { useState, useContext } from "react";
import { VariablesContext } from "../../context/VariablesContext";

export default function DatesSelector() {
  const { startDate, setStartDate, finalDate, setFinalDate } =
    useContext(VariablesContext);
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleFinalDateChange = (e) => {
    setFinalDate(e.target.value);
  };
  console.log("start", startDate);
  console.log("final", finalDate);
  return (
    <div>
      <div>
        <label htmlFor="startDate">Initial Date</label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        ></input>
      </div>
      <div>
        <label htmlFor="finalDate">Final Date</label>
        <input
          type="date"
          value={finalDate}
          onChange={handleFinalDateChange}
        ></input>
      </div>
    </div>
  );
}
