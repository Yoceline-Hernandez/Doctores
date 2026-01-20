import { Outlet } from "react-router-dom";
import { Menu } from "../components/menu/Menu";
import ContactMenu from "../components/menu/ContactMenu";
import Footer from "../components/Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <ContactMenu/>
        <Menu/>
      </header>

      <main className="flex-1 p-4">
        <Outlet/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
