import React from "react";
import ReactDOM from "react-dom/client";
import about from "./about.jsx";
import contact from "./contact.jsx";
import info from "./info.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {about}
    {contact}
    {info}
  </React.StrictMode>
);
