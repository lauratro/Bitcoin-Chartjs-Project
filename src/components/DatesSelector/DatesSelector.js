import React, { useContext } from "react";
import { VariablesContext } from "../../context/VariablesContext";
import "./DatesSelector.css";

export default function DatesSelector() {
  const { startDate, setStartDate, finalDate, setFinalDate, today } =
    useContext(VariablesContext);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleFinalDateChange = (e) => {
    setFinalDate(e.target.value);
  };

  return (
    <div className="spaceAround container">
      <div className=" directCol dateLabel ">
        <label htmlFor="startDate" className="textCentr labelMarginBot">
          Initial Date
        </label>
        <input
          type="date"
          className="dateInput"
          value={startDate}
          max={finalDate}
          onChange={handleStartDateChange}
        ></input>
      </div>
      <div className=" directCol dateLabel">
        <label htmlFor="finalDate" className="textCentr labelMarginBot">
          Final Date
        </label>
        <input
          type="date"
          className="dateInput"
          value={finalDate}
          max={today}
          min={startDate}
          onChange={handleFinalDateChange}
        ></input>
      </div>
    </div>
  );
}
