import React from "react";
import NavBarComp from "../../components/NavBarComp";
import image from "../../assets/images/qrcode.png"
import Footer from "../../components/Footer";
export default function QrCode() {
  return (
    <>
      <NavBarComp />
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <img
            src={image}
            className="img-fluid-45 pb-5"
            alt="imagem-not-found-page"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
