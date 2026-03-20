import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCar from "../pages/AddCar";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route  index element={<Home />} />
        <Route path="add" element={<AddCar />} />
      </Route>
    </Routes>
  );
}
