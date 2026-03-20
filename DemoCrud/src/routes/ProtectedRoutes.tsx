import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isAuth = !!localStorage.getItem("user");

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
