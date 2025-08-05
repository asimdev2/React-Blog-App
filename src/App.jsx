import React from "react";

import Home from "./components/Home";
import Create from "./components/Create";
import View from "./components/View";

import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
import Layout from "./components/main/Layout";
import AdminView from "./components/admin/AdminView";
import AdminHome from "./components/admin/AdminHome";

import AdminCreate from "./components/admin/AdminCreate";
import Edit from "./components/Edit";
export default function App() {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        {/* <NavLink to={'/createBlog'} className={ ({isActive,isPending})=>( isActive?'bg-primary text-light' :'')   } >Home</NavLink> */}
        <Routes>
          {/* public */}

          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path={"createBlog"} element={<Create />}></Route>
            <Route path={"viewBlog/:id"} element={<View />}></Route>
            <Route path="editBlog/:id" element={<Edit></Edit>}></Route>
          </Route>
          {/* public */}
          {/* protected */}

          <Route path="admin" element={<AdminLayout></AdminLayout>}>
            <Route index element={<AdminHome />} />
            <Route path="viewAdmin" element={<AdminView />} />
            <Route path="createAdmin" element={<AdminCreate />} />
          </Route>

          {/* protected */}
        </Routes>
      </div>
    </>
  );
}
