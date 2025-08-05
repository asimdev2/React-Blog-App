import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Aside from "./Aside";

export default function AdminLayout() {
  return (
    <>
      <section style={{ fontFamily: "serif" }}>
        <div className="row g-0 " style={{ minHeight: "100vh" }}>
          <div className="col-md-2  border-black  bg-black">
            <Aside />
          </div>
          <div className="col-md-10 border-black ">
            <nav class="navbar bg-black  navbar-dark">
              <div class="container-fluid ">
                <a class="navbar-brand fs-4 " href="#">
                  Navbar
                </a>
              </div>
            </nav>
            <div className="my-5">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
