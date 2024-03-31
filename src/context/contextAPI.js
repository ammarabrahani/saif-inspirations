import React, { createContext, useState } from "react";

export const Context = createContext();

// 2. Provide the Context
export const ContextProvider = ({ children }) => {
  const [formFields, setFormFields] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Context.Provider
      value={{ formFields, setFormFields, selectedOptions, setSelectedOptions }}
    >
      {children}
    </Context.Provider>
  );
};
