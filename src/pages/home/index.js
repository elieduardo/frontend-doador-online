import React from "react";
import InfoCards from "../../components/InfoCards";
import InfoDataCards from "../../components/InfoDataCards";
import Campanhas from "../../components/Campaigns";
import Benefits from "../../components/Benefits";

import ItemHospital from "../../components/ItemHospital";
import MainBanner from "../../components/MainBanner";
import DonationBanner from "../../components/BloodDonationBanner";
import OrgansDonationBanner from "../../components/OrgansDonationBanner";

export default function Home() {
  return (
    <div>      
      <MainBanner />
      <InfoDataCards />
      <DonationBanner />
      <InfoCards />
      <OrgansDonationBanner />
      <Campanhas />
      <Benefits />
      <div className="p-5">
        <div className="title">Hospitais Parceiros</div>
        <div className="text">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
          sed.
        </div>
        <div className="d-flex mt-4 justify-content-around">
          <ItemHospital />
          <ItemHospital />
        </div>
        <div className="d-flex mt-4 justify-content-around">
          <ItemHospital />
          <ItemHospital />
        </div>
      </div>
    </div>
  );
}
