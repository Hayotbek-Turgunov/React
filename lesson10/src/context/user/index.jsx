/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext } from "react";
import { useReducer } from "react";
import { initialState } from "./reducer";
export const UserContext = createContext();
import { reducer } from "./reducer";

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
