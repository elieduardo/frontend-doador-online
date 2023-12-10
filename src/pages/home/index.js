import React from "react";
import InfoDataCards from "../../components/InfoDataCards";
import Campaigns from "../../components/Campaigns";
import MainBanner from "../../components/MainBanner";
import BloodDonationBanner from "../../components/BloodDonationBanner";
import OrgansDonationBanner from "../../components/OrgansDonationBanner";
import Hospitals from "../../components/Hospitals";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import Partners from "../../components/Partners";
import SupportNetwork from "../../components/SupportNetwork";
import MarrowDonationBanner from "../../components/MarrowDonationBanner";
import Sales from "../../components/Sales";

export default function Home() {
  return (
    <div>
      <NavBarComp />
      <MainBanner />
      <InfoDataCards />
      <Campaigns />
      <BloodDonationBanner />
      <OrgansDonationBanner />
      <MarrowDonationBanner />
      <Sales />
      <Partners />
      <SupportNetwork />
      <Hospitals />
      <Footer />
    </div>
  );
}
