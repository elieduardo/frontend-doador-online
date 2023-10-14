import { isAuthenticated } from "services/auth";

const { Outlet, Navigate } = require("react-router-dom");

const PrivateRoutes = () => {
  const user = isAuthenticated();
  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default PrivateRoutes;
