import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <Router basename="frontend-doador-online">
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
