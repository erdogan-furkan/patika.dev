import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ component: Component, admin }) {
  const { loggedIn, user } = useAuth();

  if (admin && user.role !== "admin") {
    return <Navigate to="/" />;
  }

  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  return Component;
}

export default ProtectedRoute;
