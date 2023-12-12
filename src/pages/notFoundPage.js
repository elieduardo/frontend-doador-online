import React from "react";
import image from "../assets/images/not-found-page.png";
import Footer from "../components/Footer";
import NavBarComp from "../components/NavBarComp";

export default function NotFoundPage() {
  return (
    <>
      <NavBarComp />
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <img
            src={image}
            className="img-fluid-45 pb-5"
            alt="banner-not-found-page"
          />
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Página não encontrada.
          </p>
          <p class="lead">A página que você está procurando não existe.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
