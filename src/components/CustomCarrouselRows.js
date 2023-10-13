import React from "react";

export default function CustomCarrouselRows(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} arrow-carrousel-black`}
            style={{ ...style,}}
            onClick={onClick}
        />
    );
}