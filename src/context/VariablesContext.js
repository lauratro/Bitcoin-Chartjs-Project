import React, { useState, createContext, useEffect } from "react";

//Initialization of the variables in the context
const initContextVariables = {
  startDate: "",
  finalDate: "",
  today: "",
};

export const VariablesContext = createContext(initContextVariables);
//Creation of the provider that will share the variables values through the components
export const VariablesContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(initContextVariables.startDate);
  const [finalDate, setFinalDate] = useState(initContextVariables.finalDate);
  const [today, setToday] = useState(initContextVariables.today);

  // Definition of the initial value of the Final Date
  let getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    setToday(`${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`);
    setFinalDate(`${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`);
  };
  useEffect(() => {
    getCurrentDate();
  }, []);

  // Definition of the initial value of the Start Date (Final date - 10 days)
  useEffect(() => {
    let getTenDaysBeforeDate = (n) => {
      let t = new Date();
      t.setDate(t.getDate() + n);
      let dateMinTen = t.getDate();
      let month = t.getMonth() + 1;
      let year = t.getFullYear();

      return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
        dateMinTen < 10 ? `0${dateMinTen}` : `${dateMinTen}`
      }`;
    };
    setStartDate(getTenDaysBeforeDate(-10));
  }, []);

  return (
    <VariablesContext.Provider
      value={{
        startDate,
        setStartDate,
        finalDate,
        setFinalDate,
        today,
      }}
    >
      {children}
    </VariablesContext.Provider>
  );
};
