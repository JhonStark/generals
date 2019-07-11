import React from 'react'
import '../styles/header.scss'
import logo from '../images/logo.png'

function Header () {
  return (
    <div className="container">
      <nav>
        <ul className="container-nav">
          <li className="container-nav__item">
            <img src={logo} />
          </li>
          <li className="container-nav__item">GS- General Services</li>
          <li className="container-nav__item">boton1</li>
          <li className="container-nav__item">boton2</li>
          <li className="container-nav__item">Selecciona el Servicio</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;