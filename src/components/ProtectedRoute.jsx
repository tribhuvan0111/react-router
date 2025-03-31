import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (user === null) {
    // Prevent early redirection while user state is being initialized
    return null; // Or a loading spinner
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;



