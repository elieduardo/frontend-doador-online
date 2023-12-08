import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFoundPage from "./pages/notFoundPage";
import SingUp from "./pages/singup";
import SingIn from "./pages/singin";
import PasswordForget from "./pages/password-forget";
import PasswordRecovery from "./pages/password-recovery";
import QrCode from "./pages/qrcode";
import Profile from "./pages/profile";
import Campaigns from "./pages/campaigns";
import CampaignDetails from "./pages/campaigns/details";
import Donators from "./pages/donators";
import Donator from "./pages/donators/details";
import Promotions from "./pages/promotions";
import AboutUs from "./pages/about-us";
import Contact from "./pages/contact";
import PrivateRoutes from "./helpers/PrivateRoutes";
import { Roles } from "./helpers/Constant";
import BloodDonation from "./pages/donations/bloodDonation";
import MarrowBoneDonation from "./pages/donations/marrowBoneDonation";
import OrgansDonation from "./pages/donations/organsDonation";

export default function App() {
  return (
    <Router>
      <Routes>        
        <Route exact path="/" element={<Home />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/password-forget" element={<PasswordForget />} />
        <Route path="/password-recovery/:email/:token" element={<PasswordRecovery />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaigns/:id" element={<CampaignDetails />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/blood-donation" element={<BloodDonation />} />
        <Route path="/organs-donation" element={<OrgansDonation />} />
        <Route path="/marrow-bone-donation" element={<MarrowBoneDonation />} />
        <Route path="/donators/:id" element={<PrivateRoutes expectedRole={Roles.Hospital} />}>
          <Route index element={<Donator />} />
        </Route>
        <Route path="/donators" element={<PrivateRoutes expectedRole={Roles.Hospital} />}>
          <Route index element={<Donators />} />
        </Route>
        <Route path="/profile" element={<PrivateRoutes />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
