import React, { useState, createContext, useEffect } from "react";
import { unstable_concurrentAct } from "react-dom/test-utils";
//Initialization of the variables in the context
const initContextVariables = {
  startDate: "",
  finalDate: "",
};

export const VariablesContext = createContext(initContextVariables);
//Creation of the provider that will share the variables values through the components
export const VariablesContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(initContextVariables.startDate);
  const [finalDate, setFinalDate] = useState(initContextVariables.finalDate);

  // Definition of the initial value of the Start Date
  useEffect(() => {
    let getCurrentDate = () => {
      let newDate = new Date();
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      return `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
    };
    setFinalDate(getCurrentDate());
  }, []);

  console.log("s in context", startDate);
  // Definition of the initial value of the Final Date (Start date + 10 days)
  useEffect(() => {
    let getTenDaysBeforeDate = (n) => {
      let t = new Date();
      t.setDate(t.getDate() + n);
      let dateInTen = t.getDate();
      let month = t.getMonth() + 1;
      let year = t.getFullYear();

      return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
        dateInTen < 10 ? `0${dateInTen}` : `${dateInTen}`
      }`;
    };
    setStartDate(getTenDaysBeforeDate(-10));
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
