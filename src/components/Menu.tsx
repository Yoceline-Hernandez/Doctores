import { IoSearchSharp } from "react-icons/io5";


const iconLinkClass="text-black text-xl px-4 py-3 rounded-xl hover:bg-[#40a0ed] transition duration-500";

export const Menu = () => {
    return (
        <header className="relative z-10 h-22 flex justify-between items-center bg-white ">
        
        {/* Logo */}
        <div className="mx-8">
            <a href="index.html" target="_parent">
                <img 
                src ="/img/Logo.jpg" 
                alt ="logo hospital" 
                title="Street Hospital"
                className="max-w-[80px] -h-auto"
                />
            </a>
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
                    <a 
                        href="/" 
                        className={iconLinkClass}
                        target="_parent">
                             Inicio 
                    </a> 
                </li>
                <li className="inline-block leading-10 mx-1"> 
                    <a 
                        href="cita.html"
                        className={iconLinkClass}
                        target="_blank">
                        Agendar cita
                    </a> 
                </li>
                <li className="inline-block leading-10 mx-1"> 
                    <a 
                        href="/contacto" 
                        className={iconLinkClass}
                        target="_blank">
                        Contacto
                    </a>
                </li>
                <li className="inline-block leading-80 mx-4">
                    <a 
                        href="tienda.html" 
                        className={iconLinkClass}
                        target="_blank">
                        Tienda
                    </a>
                </li>
                {/* Icono de búsqueda */}
                <li className="mx-7">
                    <button className="text-xl hover:text-[#40a0ed] transition"> 
                        <IoSearchSharp />
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    )
}