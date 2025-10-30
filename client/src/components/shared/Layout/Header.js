import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <BiDonateBlood color="red" size={24} className="me-2" />
          Blood Bank App
        </Link>

        {/* Navbar content */}
        <div className="d-flex align-items-center ms-auto">
          {/* Welcome message */}
          {user && (
            <span className="text-white me-3 d-flex align-items-center">
              <BiUserCircle className="me-1" size={20} />
              Welcome{" "}
              {user?.name || user?.hospitalName || user?.organisationName}
              &nbsp;
              <span className="badge bg-secondary ms-2 text-uppercase">
                {user?.role}
              </span>
            </span>
          )}

          {/* Navigation links */}
          <ul className="navbar-nav flex-row align-items-center">
            <li className="nav-item mx-2">
              {(location.pathname === "/" ||
                location.pathname === "/donar" ||
                location.pathname === "/hospital") ? (
                <Link className="nav-link text-white" to="/analytics">
                  Analytics
                </Link>
              ) : (
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              )}
            </li>

            <li className="nav-item mx-2">
              <button className="btn btn-sm btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
