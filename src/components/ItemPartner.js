import React from "react";

export default function ItemPartner({photo}) {
  return (
    <div className="d-flex justify-content-center">
      <img alt="partner" src={photo} width={70}/>
    </div>
  );
}
