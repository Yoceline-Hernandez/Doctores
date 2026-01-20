import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const iconLinkClass =
  "text-black text-xl px-4 py-3 rounded-xl hover:bg-[#40a0ed] transition duration-500";

export const Menu = () => {
  return (
    <div className="relative z-10 h-22 flex justify-between items-center bg-white ">
      {/* Logo */}
      <div className="mx-8">
        {/* Para que funcione como se sutituye la etiqueta a con link
            y src con el to paa que no recargue toda la pagina y solo recargue el componente
        */}
        <Link to="/inicio">
          <img
            src="/img/Logo.jpg"
            alt="logo hospital"
            title="Street Hospital"
            className="max-w-[80px] -h-auto"
          />
        </Link>
      </div>

      {/*Boton menu movil 
        <button className="md:hidden text-2x1 mx-4" id="open"> 
            <IoReorderThreeSharp />
        </button>*/}

      {/*Navegacion*/}
      <nav className="m-2" id="nav">
        {/*<button className="closed" id="closed"> 
                <IoCloseCircle /> 
            </button>*/}
        <ul className="flex items-center">
          <li className="inline-block leading-10 mx-1">
            <Link to="/" className={iconLinkClass} >
              Inicio
            </Link>
          </li>
          <li className="inline-block leading-10 mx-1">
            <Link to="/cita" className={iconLinkClass}>
              Agendar cita
            </Link>
          </li>
          <li className="inline-block leading-10 mx-1">
            <Link to="/contacto" className={iconLinkClass}>
              Contacto
            </Link>
          </li>
          <li className="inline-block leading-80 mx-4">
            <Link to="/tienda" className={iconLinkClass}>
              Tienda
            </Link>
          </li>
          {/* Icono de búsqueda */}
          <li className="mx-7">
            <button className="text-xl hover:text-[#40a0ed] transition">
              <IoSearchSharp />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
