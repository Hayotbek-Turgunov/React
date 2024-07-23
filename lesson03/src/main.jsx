import React from "react";
import ReactDOM from "react-dom/client";
import SayHello from "./SayHello";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SayHello name="React">Hello Webrain</SayHello>
  </React.StrictMode>
);
