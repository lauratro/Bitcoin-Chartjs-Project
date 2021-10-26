import React, { useState, createContext } from "react";

const initContextVariables = {
  startDate: "",
  finalDate: "",
};

export const VariablesContext = createContext(initContextVariables);
