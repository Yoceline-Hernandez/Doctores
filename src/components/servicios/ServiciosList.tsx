import { servicios } from "../../data/servicios";
import Servicios from "./Servicios";
import '../styles.css';


export function ServiciosList(){
    return(
        <>
            <p className="text-6xl my-10 text-center title">
                 Tu salud es nuestra prioridad
            </p>
            <div className="w-full grid grid-cols-3 gap-6 justify-items-center">
                {servicios.map((servicio)=>(
                    <Servicios key={servicio.id} servicio={servicio}/>
                ))}
            </div>

        </>
    );
}