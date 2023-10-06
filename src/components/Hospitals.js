import React from "react";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import ItemHospital from "./ItemHospital";

export default function Hospitals() {
    return (
        <div className="px-lg-6 px-4 pb-lg-6 pb-5">
            <div className="mb-lg-5 mb-3">
                <div className="title">Hospitais Parceiros</div>
                <div className="text">
                    Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
                    sed.
                </div>
            </div>
            <ScrollingCarousel>
                <ItemHospital />
                <ItemHospital />
                <ItemHospital />
                <ItemHospital />
            </ScrollingCarousel>
        </div>
    );
}
