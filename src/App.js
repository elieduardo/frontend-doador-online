import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFoundPage from "./pages/notFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<>Login</>} />
        <Route path="/cadastro" element={<>Cadastro</>} />
      </Routes>
    </HashRouter>
  );
}
