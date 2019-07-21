import React from 'react'
import '../styles/header.scss'
import logo from '../images/logo.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function Header () {
  return (
    <Router>
    <div className="container">
      <nav>
        <ul className="container-logo">
          <li className="container-logo__logo"><img src={logo} alt="logotipo"/></li>
          <li className="container-logo__title">GS- General Services</li>
        </ul>
        <ul className="container-nav">
          
          <li className="container-nav__item--logo">
            <img src={logo} alt="logotipo"/>
          </li>
            <li className="container-nav__item--title">GS- General Services</li>
            <li className="container-nav__item"><Link to="/about/" className="container-nav__item--register">Registro</Link></li>
            <li className="container-nav__item"><Link to="/about/" className="container-nav__item--register">Ingresar</Link></li>
            <li className="container-nav__item--service">Selecciona el Servicio</li>
        </ul>
        <div className="container-alert">
          <div className="container-alert__button">
            <p className="container-alert__button--text">Selecciona el Servicio que quieres</p>
            </div>
        </div>
      </nav>
    </div>
    </Router>
  )
}

export default Header;