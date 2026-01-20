import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Inicio } from "../components/Inicio";
import { TiendaList } from "../components/tienda/TiendaList";
import { Contacto } from "../components/Contacto";


export function AppRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/tienda" element={<TiendaList/>} />
            <Route path="/contacto" element={<Contacto/>} />
        </Route>
    </Routes>
  );
}
