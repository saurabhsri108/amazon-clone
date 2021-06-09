import React, { createContext, useContext, useReducer } from 'react';

// Prepare a data layer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull the information from the data layer
export const useStateValue = () => useContext(StateContext);
