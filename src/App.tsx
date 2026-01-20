import { BrowserRouter} from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/*BrowserRouter es de React que se usa para la navegacion
        entre paginas en una aplicacon en React
        Routes es el contenedor donde se declara todas las
        paginas de tu app
        Route es la pagina a la quieres dar acceso
        Link es como una etiqueta a pero solo es para react que se 
        usa para una navegacion interna
        path (ruta) es la direccion de la pagina una diagonal /
        siempre es la pagina principal y todo path empieza con /
        element es el elemento que se va renderizar
     */}
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
