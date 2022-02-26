import React from 'react';
import {Link} from 'react-router-dom'
//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
        <a className="navbar-brand"  href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: ""}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://cook-sheet.herokuapp.com/login">CookSheet </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/travel">Travel Diaries</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://rick-morty-world.herokuapp.com/">Rick & Morty</a>
      </li>
      
    </ul>
  </div>

        </div>
  
</nav>
  )
}

export default Navbar