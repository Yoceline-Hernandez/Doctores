import{Menu} from './components/Menu'
import ContactMenu from './components/ContactMenu'
import './App.css'
import { ImgCarrusel } from './components/ImgCarrusel'
import { ServiciosList } from './components/servicios/ServiciosList'

function App() {

  return (
    <>
     {/**/}
     <ContactMenu/>
     <Menu/>
     <ImgCarrusel/>
     <ServiciosList/>
    </>
  )
}

export default App
