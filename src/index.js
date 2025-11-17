import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ensure the root element exists in your public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
