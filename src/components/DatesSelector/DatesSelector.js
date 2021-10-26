import React, { useState, useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { VariablesContext } from "../../context/VariablesContext";

export default function DatesSelector() {
  const { startDate, setStartDate, finalDate, setFinalDate } =
    useContext(VariablesContext);
  const [currentDate, setCurrentDate] = useState("");
  let getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
  };
  useEffect(() => {
    setCurrentDate(getCurrentDate());
  }, []);
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
          max={currentDate}
          onChange={handleStartDateChange}
        ></input>
      </div>
      <div>
        <label htmlFor="finalDate">Final Date</label>
        <input
          type="date"
          value={finalDate}
          max={currentDate}
          min={startDate}
          onChange={handleFinalDateChange}
        ></input>
      </div>
    </div>
  );
}
