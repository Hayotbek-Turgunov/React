import React from "react";
import ReactDOM from "react-dom/client";
import SayHello from "./info";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SayHello name="React">Hello Webrain</SayHello>
    <SayHello name="Vue" />
    <SayHello name="Angular" />
    <SayHello name="Node.js" />
  </React.StrictMode>
);
