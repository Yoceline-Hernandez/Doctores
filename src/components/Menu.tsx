import { IoCloseCircle, IoReorderThreeSharp, IoSearchSharp } from "react-icons/io5";



export const Menu = () => {
    return (
        <header className="bg-white h-15 w-full flex justify-between items-center">
        
        {/* Logo */}
        <div className="max-w-13 mx-8">
            <a href="index.html" target="_parent">
                <img 
                src ="/img/Logo.jpg" 
                alt ="logo hospital" 
                title="Street Hospital"
                />
            </a>
        </div>

        {/*Boton menu movil */}
        <button className="md:hidden text-2x1 mx-4" id="open"> 
            <IoReorderThreeSharp />
        </button>

        {/*Navegacion*/}
        <nav className="m-2" id="nav">
            <button className="closed" id="closed"> 
                <IoCloseCircle />
            </button>
            <ul className="flex items-center">
                <li className="inline-block leading-10 mx-1"> 
                    <a 
                        href="/" 
                        className="text-black text-lg px-4 py-3 rounded-xl
                            hover:bg-[#40a0ed] transition duration-500"
                        target="_parent">
                             Inicio 
                    </a> 
                </li>
                <li className="inline-block leading-10 mx-1"> 
                    <a 
                        href="cita.html"
                        className="text-black text-lg px-4 py-3 rounded-xl 
                            hover:bg-[#40a0ed] transition duration-500" 
                        target="_blank">
                        Agendar cita
                    </a> 
                </li>
                <li className="inline-block leading-10 mx-1"> 
                    <a 
                        href="contacto.html" 
                        className="text-black text-lg px-4 py-3 rounded-xl 
                            hover:bg-[#40a0ed] transition duration-500"
                        target="_blank">
                        Contacto
                    </a>
                </li>
                <li className="inline-block leading-80 mx-4">
                    <a 
                        href="tienda.html" 
                        className="text-black text-lg px-4 py-3 rounded-xl
                            hover:bg-[#40a0ed] transition duration-500"
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