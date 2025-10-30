import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/features/authSlice"; // Adjust if needed

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        Blood Bank
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          {/* Common for all roles */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          {/* Role-based links */}
          {user?.role === "admin" && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/inventory">
                  Manage Inventory
                </Link>
              </li>
            </>
          )}

          {user?.role === "hospital" && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/hospital/inventory">
                  Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hospital/donors">
                  Donors
                </Link>
              </li>
            </>
          )}

          {user?.role === "donor" && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  My Donations
                </Link>
              </li>
            </>
          )}
        </ul>

        <ul className="navbar-nav">
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-link text-info">{user?.name}</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-sm btn-danger ms-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
