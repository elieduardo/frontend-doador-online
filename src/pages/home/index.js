import React from "react";
import InfoDataCards from "../../components/InfoDataCards";
import Campaigns from "../../components/Campaigns";
import MainBanner from "../../components/MainBanner";
import DonationBanner from "../../components/BloodDonationBanner";
import OrgansDonationBanner from "../../components/OrgansDonationBanner";
import Hospitals from "../../components/Hospitals";
import NavBarComp from "../../components/NavBarComp";
import Footer from "../../components/Footer";
import Partners from "../../components/Partners";
import SupportNetwork from "../../components/SupportNetwork";

export default function Home() {
  return (
    <div>
      <NavBarComp />
      <MainBanner />
      <InfoDataCards />
      <DonationBanner />
      <Campaigns />
      <OrgansDonationBanner />
      <Partners />
      <SupportNetwork />
      <Hospitals />
      <Footer />
    </div>
  );
}
