import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="dark:bg-slate-900 min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
