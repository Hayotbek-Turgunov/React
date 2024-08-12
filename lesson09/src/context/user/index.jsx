/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  return (
    <UserContext.Provider value={"user webrain"}>
      {props.children}
    </UserContext.Provider>
  );
};
