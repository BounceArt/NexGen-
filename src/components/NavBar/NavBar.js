import "./NavBar.css"  
import M from 'materialize-css';
import React, { useEffect } from 'react'
import {CartWidget} from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
 export const NavBar = () =>{
  useEffect(() => {
      const elems = document.querySelectorAll('.dropdown-trigger')
       M.Dropdown.init(elems, { hover: false })
    })
  

    return <div className="container">
    <nav className="nav-extended">
          <Link to="/" className="brand-logo">
            <img src="../images/nexgen.jpeg" alt="Logo" className="right brand-logo" />
          </Link>
      <ul className="left hide-on-med-and-down">
        <li><Link className="link" to="/">Home</Link></li>
        <li className="dropdown-trigger links" data-target="dropdown1">
          <Link to="/">Productos<i className="material-icons right">arrow_drop_down</i></Link>
          <ul id="dropdown1" className="dropdown-content">
            <li><Link className="link" to="/categoria/Auriculares">Auriculares</Link></li>
            <li className="divider link"></li>
            <li><Link className="link" to="/categoria/Celulares">Celulares</Link></li>
            <li className="divider link"></li>
            <li><Link className="link" to="/categoria/Monitores">Monitores</Link></li>
          </ul>
        </li>
        <li><Link className="link" to="/contacto">Contacto</Link></li>
        <li><CartWidget/></li>
      </ul>
    </nav>
      </div>
    }