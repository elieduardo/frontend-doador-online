import React, { useEffect, useState } from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import ItemHospital from "./ItemHospital";

export default function Hospitals() {
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div className="px-lg-5 px-4 pb-lg-6 pb-5">
            <div className="mb-lg-5 mb-3">
                <div className="title">Hospitais Parceiros</div>
                <div className="text">
                    Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
                    sed.
                </div>
            </div>
            <Carousel show={width > 900 ? 3.5 : 1.5} slide={width > 900 ? 3 : 2} swiping={true} responsive={true} rightArrow={<></>} leftArrow={<></>}>
                <ItemHospital />
                <ItemHospital />
                <ItemHospital />
                <ItemHospital />
            </Carousel>
        </div>
    );
}
