import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "darkcyan",
        fontFamily: "serif",
        fontSize: "19px",
      }}
    >
      <div className="container-fluid gx-5">
        {/* Logo / Brand */}
        <Link className="navbar-brand fw-bold text-white fs-4" to="/">
          React Blog App
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mx-md-0 ms-md-auto d-flex justify-content-center justify-content-md-end">
            <li className="nav-item">
              <Link
                className="nav-link active fw-bold text-white fs-4"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bold text-white fs-4"
                to="/createBlog"
              >
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white fs-4" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
