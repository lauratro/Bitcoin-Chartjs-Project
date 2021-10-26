import React, { useState, useContext } from "react";
import { VariablesContext } from "../../context/VariablesContext";

export default function DatesSelector() {
  const { startDate, setStartDate, finalDate, setFinalDate } =
    useContext(VariablesContext);
  return (
    <div>
      <div>
        <label for="startDate">Initial Date</label>
        <input type="date" value={startDate}></input>
      </div>
    </div>
  );
}
