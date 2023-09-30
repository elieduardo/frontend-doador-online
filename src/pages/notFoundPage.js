import React from "react"
import image from "../assets/images/not-found-page.png"

export default function NotFoundPage() {
    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <img src={image} className="img-fluid-45 pb-5" alt="imagem-not-found-page"/>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Página não encontrada.</p>
                <p class="lead">
                    A página que você está procurando não existe.
                </p>
            </div>
        </div>
    )
}