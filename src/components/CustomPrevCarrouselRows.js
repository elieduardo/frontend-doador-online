import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function CustomPrevCarrouselRows(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <IoIosArrowBack
        className={`${className} arrow-carrousel-black`}
        style={{ ...style }}
        onClick={onClick}
      />
    </>
  );
}
