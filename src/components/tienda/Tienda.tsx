import type { Productos } from "../../types/types";

type TiendaProps = {
  productos: Productos;
};

function Tienda({ productos }: TiendaProps) {
  return (
    <div className=" w-130 text-center p-5 hover:scale-[1.1] cursor-pointer">
      <figure className="overflow-hidden">
        <img
          src={`/img/${productos.imagen}.jpg`}
          alt="alimentacion"
          className="size-auto object-cover rounded-xl transition-all duration-500 "
        />
      </figure>
      <h3 className="text-2xl pt-5">{productos.products}</h3>
      <p className="p-2">{productos.description}</p>
      <p className="text-xl p-3">${productos.price}</p>
      <button
        className="p-3 overflow-hidden text-base font-semibold rounded-2xl group bg-gradient-to-br from-blue-500 to-blue-300 group-hover:from-blue-500 group-hover:to-blue-300 hover:text-white"
        onClick={() => console.log("Producto agregado al carrito")}
      >
        Agregar al carrito
      </button>
    </div>
  );
}
export default Tienda;
