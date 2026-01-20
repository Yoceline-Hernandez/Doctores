import {   IoLogoFacebook,IoLogoInstagram } from "react-icons/io5";

function Footer(){
    return(
        <footer className="bg-black h-full text-white text-[17px]">
            <div className="flex h-full p-5 justify-between m-3">
                <ul>
                    <li className="m-2">
                        <a 
                            href="" 
                            target="_parent"
                        >
                            Inicio
                        </a>
                    </li>
                    <li className="m-2">                        
                        <a 
                            href="" 
                            target="_parent"
                        >
                            Agendar Cita
                        </a>
                    </li>
                    <li className="m-2 ">
                        <a 
                            href="" 
                            target="_parent"
                        >
                            Contacto
                        </a>
                    </li>
                    <li className="m-2">
                        <a 
                            href = ""
                            target="_parent"
                        >
                            Tienda
                        </a>
                    </li>
                </ul>
                <div>
                    <a 
                        href="https://www.facebook.com/?locale=es_LA" 
                        target="_blank"
                    >
                        <IoLogoFacebook className="text-white text-base m-5 hover:text-blue-700 transition-colors duration-300" />
                    </a>
                    <a 
                        href="https://www.instagram.com/" 
                        target="_blank"
                    > 
                        <IoLogoInstagram className="text-white text-base m-5 hover:text-pink-500 transition-colors duration-300" />
                    </a>
                </div>
                <div>
                    <ul>
                        <li> <a href="#">Politica de privacidad</a></li>
                        <li> <a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-center"> © 2025 Todos  los derechos reservados StreetHopital</p>
        </footer>
    )
}
export default Footer;