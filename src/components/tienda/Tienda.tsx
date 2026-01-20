import type { Productos } from "../../types/types";

type TiendaProps = {
  productos: Productos;
};

function Tienda({ productos }: TiendaProps) {
  return (
    
      <div className=" border w-130 text-center p-10 hover:shadow-lg shadow-cyan-300/40 cursor-pointer">
        <figure className="overflow-hidden">
          <img
            src={`/img/${productos.imagen}.jpg`}
            alt="alimentacion"
            className="size-full object-cover rounded-xl transition-all duration-500 hover:scale-[1.2]"
          />
        </figure>
        <h3 className="text-lg pt-5">{productos.products}</h3>
        <p className="p-2">{productos.description}</p>
        <p>${productos.price}</p>
        <button 
            className="bg-blue-200 text-black m-3 p-3 rounded-md text-base hover:bg-red-100"
            onClick={() => console.log("Producto agregado al carrito")}
        >
            Agregar al carrito
        </button>
      </div>

  )
}
export default Tienda;