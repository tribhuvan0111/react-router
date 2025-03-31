import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
      <div className="container"><Link to="/" className="navbar-brand fw-bold fs-4">CourseAuth</Link>
        <div className="d-flex gap-2">
          {!user ? (
            <>
              <Link to="/login" className="btn btn-outline-light">Login</Link>
              <Link to="/register" className="btn btn-light text-primary fw-semibold">Register</Link>
            </>
          ) : (
            <>
              <NavLink to="/create-post" className="btn btn-outline-light">New Post</NavLink>
              <NavLink to="/dashboard" className="btn btn-outline-light">Dashboard</NavLink>
              <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
