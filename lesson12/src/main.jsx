import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./root";
import Context from "./context/index";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);
