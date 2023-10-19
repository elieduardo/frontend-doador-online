import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFoundPage from "./pages/notFoundPage";
import SingUp from "./pages/singup";
import SingIn from "./pages/singin";
import PasswordForget from "./pages/password-forget";
import PasswordRecovery from "./pages/password-recovery";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/password-forget" element={<PasswordForget />} />
        <Route path="/password-recovery/:email/:token" element={<PasswordRecovery />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
