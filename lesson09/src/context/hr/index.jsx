/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext } from "react";
export const HrContext = createContext();

export const HrProvider = (props) => {
  return (
    <HrContext.Provider value={"webrain"}>{props.children}</HrContext.Provider>
  );
};
