import React from "react";
import InfoCards from "../../components/InfoCards";
import InfoDataCards from "../../components/InfoDataCards";
import Campaigns from "../../components/Campaigns";
import Benefits from "../../components/Benefits";
import MainBanner from "../../components/MainBanner";
import DonationBanner from "../../components/BloodDonationBanner";
import OrgansDonationBanner from "../../components/OrgansDonationBanner";
import Hospitals from "../../components/Hospitals";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBarComp />
      <MainBanner />
      <InfoDataCards />
      <DonationBanner />
      <InfoCards />
      <OrgansDonationBanner />
      <Campaigns />
      <Benefits />
      <Hospitals />
      <Footer />
    </div>
  );
}
