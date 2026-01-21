export function Contacto () {
  return (
    <div className="flex justify-center items-center scale-[1.1]">
      <div className="flex flex-col items-center mt-20 p-4 shadow-xl shadow-cyan-300/30">
        <h2 className="text-center text-4xl title bg-white">Contactanos</h2>
        <form className="flex flex-col  m-8 p-4 gap-4">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            className="border border-sky-200 text-lg"

          />
          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            placeholder="nombre@ejemplo.com"
            className="border border-sky-200 text-lg"

          />
        </form>
        <button
          className="border border-sky-500  px-4 py-2 rounded-xl 
              hover:bg-sky-300 shadow-sky-300/30 hover:text-white transition duration-300"
          type="submit"
        >
          Enviar mensaje
        </button>
      </div>
    </div>
  );
};