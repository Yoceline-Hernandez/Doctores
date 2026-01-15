import type {Services} from "../../types/types"

type ServiciosProp ={
    servicio: Services
}

function Servicios({servicio}:ServiciosProp){

    return(
        <div className="size-full text-center p-10 hover:shadow-lg shadow-cyan-300/40 cursor-pointer">
            <figure className="overflow-hidden">
                <img 
                    src={`/img/${servicio.image}.jpg`} 
                    alt="alimentacion"
                    className="w-full h-90 object-cover rounded-xl transition-all duration-500 hover:scale-[1.2]"
                />
            </figure>
            <h3 className="text-lg pt-5">
                {servicio.services}
            </h3>
            <p className="p-2">
                {servicio.description}
            </p>
            <button className="bg-blue-200 text-black m-3 p-3 rounded-md text-base hover:bg-red-100">
                <a 
                    href="#"
                >
                    Leer más
                </a>
            </button>
        </div>
    );
}
export default Servicios;