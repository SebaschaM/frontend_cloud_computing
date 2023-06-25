import React, { createContext, useReducer } from "react";

// Define el estado inicial
const initialState = {
  selectedBranchId: localStorage.getItem("branchId"),
};

// Define las acciones que modificarán el estado
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_BRANCH_ID":
      return {
        ...state,
        selectedBranchId: action.payload,
      };
    default:
      return state;
  }
};

// Crea el Context
export const StoreContext = createContext();

// Crea el Provider para envolver tu aplicación y proporcionar el estado global
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
