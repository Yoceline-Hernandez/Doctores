import type {Services} from "../../types/types"

type ServiciosProp ={
    servicio: Services
}

function Servicios({servicio}:ServiciosProp){

    return(
        <div className="cursor-pointer">
                <div className="size-full text-center p-10 hover:shadow-lg shadow-cyan-300/30">
                    <figure>
                        <img src={`/img/${servicio.image}.jpg`} alt="alimentacion"/>
                    </figure>
                    <h3>{servicio.services}</h3>
                    <p>{servicio.description}</p>
                    <button>
                        <a href="#">Leer más</a>
                    </button>
                    300/30
                </div>
        </div>
    );
}
export default Servicios;