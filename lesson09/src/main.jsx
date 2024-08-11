import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./root";
import { UserContext, UserProvider } from "./context/user";
import { HrProvider } from "./context/hr";

export const Context = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <HrProvider>
        <Root />
      </HrProvider>
    </UserProvider>
  </React.StrictMode>
);
