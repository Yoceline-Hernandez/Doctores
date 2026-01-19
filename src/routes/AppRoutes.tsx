import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import Tienda from "../components/tienda/Tienda";
import { Inicio } from "../components/Inicio";


export function AppRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/tienda" element={<Tienda/>} />
        </Route>
    </Routes>
  );
}
