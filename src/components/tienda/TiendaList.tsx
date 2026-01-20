import { product } from "../../data/producto";
import Tienda from "./Tienda";

export function TiendaList(){
    return(
        <>
            <p className="text-6xl text-center title">Carrito</p>
            <div className="size-auto p-15 grid grid-cols-4 gap-5 justify-items-center">
                {product.map((productos)=>(
                    <Tienda key={productos.id} productos={productos}/>
                ))}
            </div>
        </>
    );
}