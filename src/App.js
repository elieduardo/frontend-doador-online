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
import OrgansDonations from "./pages/organs-donation";
import Contact from "./pages/contact";
import PrivateRoutes from "./helpers/PrivateRoutes";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/qrcode"
          element={
            <PrivateRoutes>
              <Route element={<QrCode />} />
            </PrivateRoutes>
          }
        />
        <Route exact path="/" element={<Home />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/password-forget" element={<PasswordForget />} />
        <Route path="/password-recovery/:email/:token" element={<PasswordRecovery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaigns/:id" element={<CampaignDetails />} />
        <Route path="/donators" element={<Donators />} />
        <Route path="/donators/:id" element={<Donator />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/organs-donation" element={<OrgansDonations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
