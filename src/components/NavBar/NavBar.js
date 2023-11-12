import "./NavBar.css"  
import {Carrito, Numerito} from "../CartWidget/CartWidget"
 export const NavBar = () =>{
    return <div className="container">
    <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <img src="../images/nexgen.jpeg" alt="Logo" className="right brand-logo" />
          </a>
          <ul className="left hide-on-med-and-down">
            <li><a className="link" href="">Home</a></li>
            <li><a className="link" href="">Sobre Nosotros</a></li>
            
            <li><a className="dropdown-trigger link" href="#!" data-target="dropdown1">Productos<i className="material-icons right">arrow_drop_down</i></a></li>
            <li className="carrito"><a className="link"><Carrito/>Carrito<Numerito/></a> </li>
          </ul>
        </div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a className="link" href="#!">Todos los productos</a></li>
          <li><a className="link" href="#!">Celulares</a></li>
          <li className="divider link"></li>
          <li><a className="link" href="#!"></a></li>
        </ul>
    </nav>
      </div>
    }