
import { IoLogoFacebook, IoLogoInstagram,IoCart, IoMail,IoCall } from "react-icons/io5";

function ContactMenu(){
    return(
        <address className=" bg-sky-300 p-px justify-center flex">
            <IoCall className="text-white text-base m-2"/>
            <p className="text-white text-[17px] m-1">     
                5576893421
            </p>
            <IoMail className="text-white text-base m-2"/>
            <p className="text-white text-[17px] m-1">
                streethospital@gmail.com
            </p>
            <a 
                href="https://www.facebook.com/?locale=es_LA"
                target="_blank"
            >
                <IoLogoFacebook className="text-white text-base m-2 "/>
            </a>
            <a 
                href="https://www.instagram.com/"
                target="_blank"
            >
                    <IoLogoInstagram  className="text-white text-base m-2"/>
            </a>
            <a 
                href="/"
                target="_blank"
            >
                <IoCart className="text-white text-base m-2 "/>
            </a>
                
        </address>
    )
}


export default ContactMenu;