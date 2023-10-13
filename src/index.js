import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-image-top body-sz">
      <App />
    </div>
    <ToastContainer />
  </React.StrictMode>
);
