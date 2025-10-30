import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <main className="home-layout">
      <Outlet />
    </main>
  );
}
