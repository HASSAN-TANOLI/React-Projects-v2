import { Navbar, Footer } from "./components";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
