import React from "react";
import ReactDOM from "react-dom/client";

import Class from "./Class";
import Hooks from "./Hook";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ display: "flex" }}>
      <Class></Class>
      <Hooks></Hooks>
    </div>
  </React.StrictMode>
);
