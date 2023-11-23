import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated, roleIsEqual } from "../services/auth";

const PrivateRoutes = ({ expectedRole }) => {
  const user = isAuthenticated();
  const validateRole = (expectedRole) => {
    if (!expectedRole) {
      return true;
    }

    return roleIsEqual(expectedRole);
  };

  return user && validateRole(expectedRole) ? <Outlet /> : <Navigate to="/not-found" replace />;
};

export default PrivateRoutes;