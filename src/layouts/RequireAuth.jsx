import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.username ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuth;
