import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFoundPage from "./pages/notFoundPage";
import SingUp from "./pages/singup";
import SingIn from "./pages/singin";
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<SingIn/>} />
        <Route path="/cadastro" element={<SingUp/>} />
      </Routes>
    </HashRouter>
  );
}
