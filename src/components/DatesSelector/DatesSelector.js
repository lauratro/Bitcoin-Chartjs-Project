import React, { useState, useContext } from "react";
import { VariablesContext } from "../../context/VariablesContext";

export default function DatesSelector() {
  const { startDate, setStartDate, finalDate, setFinalDate } =
    useContext(VariablesContext);
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  console.log("start", startDate);
  return (
    <div>
      <div>
        <label for="startDate">Initial Date</label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        ></input>
      </div>
    </div>
  );
}
