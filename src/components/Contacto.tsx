export function Contacto() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center border h-96 w-96 mt-20 p-4 shadow-lg">
        <h2 className="text-center text-4xl title">Contactanos</h2>
        <form className="flex flex-col  m-8 p-4 gap-4">
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre"
            className="border border-cyan-200 text-lg"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="nombre@ejemplo.com"
            className="border border-cyan-200 text-lg"
          />
        </form>
        <button className=" bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300">
          Enviar
        </button>
      </div>
    </div>
  );
}
