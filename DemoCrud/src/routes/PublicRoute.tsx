import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  const isAuth = !!localStorage.getItem("user");

  if (isAuth) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}
