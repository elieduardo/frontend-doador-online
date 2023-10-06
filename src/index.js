import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBarComp from "./components/NavBarComp";
import "./assets/styles/styles.scss";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-image-top body-sz">
      <NavBarComp />
      <App />
      <Footer />
    </div>
    <ToastContainer />
  </React.StrictMode>
);
