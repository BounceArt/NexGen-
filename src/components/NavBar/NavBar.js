import "./NavBar.css"  
import M from 'materialize-css';
import React, { useEffect } from 'react'
import {Carrito, Numerito} from "../CartWidget/CartWidget"
 export const NavBar = () =>{
  useEffect(() => {
      const elems = document.querySelectorAll('.dropdown-trigger')
       M.Dropdown.init(elems, { hover: false })
    })
  

    return <div className="container">
    <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <img src="../images/nexgen.jpeg" alt="Logo" className="right brand-logo" />
          </a>
          <ul className="left hide-on-med-and-down">
            <li><a className="link" href="">Home</a></li>
            <li><a className="dropdown-trigger links" href="#!" data-target="dropdown1">Productos<i className="material-icons right">arrow_drop_down</i></a></li>
            <li><a className="link" href="">Contacto</a></li>
            <li className="carrito"><a className="link"><Carrito/>Carrito<Numerito/></a> </li>
          </ul>
        </div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a className="link" href="#!">Auriculares</a></li>
          <li className="divider link"></li>
          <li><a className="link" href="#!">Celulares</a></li>
          <li className="divider link"></li>
          <li><a className="link" href="#!">Monitores</a></li>
        </ul>
    </nav>
      </div>
    }