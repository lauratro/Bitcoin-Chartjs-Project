import React, { useState, createContext, useEffect } from "react";
import { unstable_concurrentAct } from "react-dom/test-utils";

const initContextVariables = {
  startDate: "",
  finalDate: "",
};

export const VariablesContext = createContext(initContextVariables);
export const VariablesContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(initContextVariables.startDate);
  const [finalDate, setFinalDate] = useState(initContextVariables.finalDate);

  useEffect(() => {
    let getCurrentDate = () => {
      let newDate = new Date();
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      return `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
    };
    setStartDate(getCurrentDate());
  }, []);

  console.log(startDate);

  useEffect(() => {
    let getInTenDaysDate = (n) => {
      let t = new Date();
      t.setDate(t.getDate() + n);
      let dateInTen = t.getDate();
      let month = t.getMonth() + 1;
      let year = t.getFullYear();

      return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
        dateInTen < 10 ? `0${dateInTen}` : `${dateInTen}`
      }`;
    };
    setFinalDate(getInTenDaysDate(10));
  }, []);

  console.log("f in context", finalDate);
  return (
    <VariablesContext.Provider
      value={{
        startDate,
        setStartDate,
        finalDate,
        setFinalDate,
      }}
    >
      {children}
    </VariablesContext.Provider>
  );
};
