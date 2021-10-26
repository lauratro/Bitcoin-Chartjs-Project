import React, { useState, createContext, useEffect } from "react";

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
