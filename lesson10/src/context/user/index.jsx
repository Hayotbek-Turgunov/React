import { createContext, useContext, useReducer } from "react";
import { students } from "../../mock/students";
import { InitialState, reducer } from "./reducer";

export const Context = createContext();
export const UserContext = () => useContext(Context);

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
