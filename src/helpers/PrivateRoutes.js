import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth";

const PrivateRoutes = () => {
  const user = isAuthenticated();
  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoutes;