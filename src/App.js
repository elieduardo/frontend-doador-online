import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFoundPage from "./pages/notFoundPage";
import SingUp from "./pages/singup";
import SingIn from "./pages/singin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<SingIn/>} />
        <Route path="/cadastro" element={<SingUp/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
