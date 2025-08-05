import React from "react";
import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <div>
      &lt;&gt;
      <div className="d-flex flex-column fs-6  flex-shrink-0 p-3 bg-black  text-bg-dark">
        {" "}
        <NavLink
          to="/"
          className=" d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          {" "}
          <svg
            className="bi pe-none "
            width={40}
            height={32}
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap" />
          </svg>{" "}
          <span className="fs-4">Sidebar</span>{" "}
        </NavLink>{" "}
        <hr />{" "}
        <ul className="nav nav-pills flex-column mb-auto ">
          {" "}
          <li className="nav-item ">
            {" "}
            <NavLink
              to="/admin/"
              style={{ margin: "15px 0px" }}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              aria-current="page"
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#home" />
              </svg>
              Home
            </NavLink>{" "}
          </li>{" "}
          <li> </li>{" "}
          <li>
            {" "}
            <NavLink
              style={{ margin: "15px 0px" }}
              to="/admin/viewAdmin"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#table" />
              </svg>
              View Blog
            </NavLink>{" "}
            <NavLink
              style={{ margin: "15px 0px" }}
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {" "}
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2" />
              </svg>
              Go to User Pannel
            </NavLink>{" "}
          </li>{" "}
        </ul>{" "}
        <hr />{" "}
      </div>
    </div>
  );
}
