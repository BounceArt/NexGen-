import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {Footer} from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={"Bienvenido a NexGen Store!"} />
      </header>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default App;
