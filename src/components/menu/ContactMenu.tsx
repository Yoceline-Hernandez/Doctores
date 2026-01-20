import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoCart,
  IoMail,
  IoCall
} from "react-icons/io5";


function ContactMenu() {
  return (

  <address className="bg-sky-300 relative z-20 flex justify-center gap-5 py-2 px-5 cursor-pointer">
      
      <div className=" flex items-center gap-2">
        <IoCall className="text-white text-base" />
        <span className="text-white text-17px hover:text-black transition-colors duration-200">5576893421</span>
      </div>

      <div className="flex items-center gap-2">
        <IoMail className="text-white text-base"/>
        <span className="text-white text-17px hover:text-black transition-colors duration-200">streethospital@gmail.com</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/"
          target="_blank"
        >
          <IoLogoInstagram className="text-white text-base hover:text-pink-500 transition-colors duration-300" />
        </a>
         <a
            href="https://www.facebook.com/?locale=es_LA"
            target="_blank"
        >
        <IoLogoFacebook className="text-white text-base hover:text-blue-700 transition-colors duration-300" />
        </a>
        <a href="/" target="_blank">
        <IoCart className="text-white text-base hover:text-lime-300 transition-colors duration-300" />
      </a>
    
      </div>

    </address>
  );
}

export default ContactMenu;
