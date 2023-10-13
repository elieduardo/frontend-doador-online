import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function CustomNextCarrouselRows(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <IoIosArrowForward
        className={`${className} arrow-carrousel-black`}
        style={{ ...style }}
        onClick={onClick}
      />
    </>
  );
}
