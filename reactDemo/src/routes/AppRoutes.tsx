import { Route, Routes } from "react-router-dom";
import AddCar from "../pages/AddCar";
import Dump from "../pages/Dump";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddCar />} />
      <Route path="/dump" element={<Dump />} />

    </Routes>
  );
}

export default AppRoutes;
