import React, { useState, createContext } from "react";

const initContextVariables = {
  startDate: "",
  finalDate: "",
};

export const VariablesContext = createContext(initContextVariables);
export const VariablesContextProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(initContextVariables.startDate);
  const [finalDate, setFinalDate] = useState(initContextVariables.finalDate);

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
