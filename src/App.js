import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFoundPage from "./pages/notFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index path="" element={<Home />} />
        <Route exact path="/cadastro" element={<>cadastro teste</>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
