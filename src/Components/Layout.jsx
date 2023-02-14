import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>@WUrmat</footer>
    </>
  );
};

export default Layout;
