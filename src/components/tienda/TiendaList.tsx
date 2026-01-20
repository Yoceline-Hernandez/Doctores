import { product } from "../../data/producto";
import Tienda from "./Tienda";

export function TiendaList(){
    return(
        <>
            <p className="text-6xl my-10 text-center title">Carrito</p>
            <div className="border size-auto grid grid-cols-4 gap-4 justify-items-center">
                {product.map((productos)=>(
                    <Tienda key={productos.id} productos={productos}/>
                ))}
            </div>
        </>
    );
}