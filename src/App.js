import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import Footer from "./components/Footer/Footer"
import  {BrowserRouter, Route, Routes} from "react-router-dom"
import Contacto from "./components/Contacto/Contacto"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

      <Routes>
      <Route path='/' element= {<ItemListContainer/>}/>
      <Route path="/contacto" element= {<Contacto/>}/>
      </Routes>
      

        
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App;
