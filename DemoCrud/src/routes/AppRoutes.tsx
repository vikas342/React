import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AuthLayout from "../layout/AuthLayout";
import PublicRoute from "./PublicRoute";
import ProtectedRoutes from "./ProtectedRoutes";
import CustomeHook from "../pages/CustomeHook";
import ApiCall from "../pages/ApiCall";
import ReactHookForm from "../pages/ReactHookForm";
import Zustand from "../pages/Zustand";

export default function AppRoutes() {
  const isAuth = !!localStorage.getItem("user");
  return (
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       isAuth ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />
    //     }
    //   />
    //   <Route element={<AuthLayout />}>
    //     <Route path="login" element={<Login />} />
    //   </Route>
    //   <Route path="/" element={<MainLayout />}>
    //     <Route path="home" element={<Home />} />
    //   </Route>
    // </Routes>

    <Routes>
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="custom-hook" element={<CustomeHook />} />

          <Route path="api-call" element={<ApiCall />} />

          <Route path="react-hook-form" element={<ReactHookForm />} />

          <Route path="zustand" element={<Zustand />} />

        </Route>
      </Route>
    </Routes>
  );
}
