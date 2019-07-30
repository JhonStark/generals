import React from 'react'
import '../styles/Footer.scss'
import Facebook  from './facebook'
import Instagram from './instagram'
import Twitter from './twitter'


function Footer () {
  return (
    <div className="footer">
      <h2 className="footer-title">Contactos</h2>
      <ul className="footer-media"> 
        <li className="footer-media__facebook"><Facebook  /></li>
        <li className="footer-media__instagram"><Instagram /></li>
        <li className="footer-media__twitter"><Twitter /></li>
        
      </ul>

      <ul className="footer-about">
          <li className="footer-about__item">Email: generalservices@gmail.com</li>
          <li className="footer-about__item">WhatsApp: 3008626756</li>
          <li className="footer-about__item">Quienes Somos</li>
          <li className="footer-about__item">Servicios</li>
          <li className="footer-about__item">Pagos</li>
          <li className="footer-about__item">Planes</li>
          <li className="footer-about__item">Trabaja con Nosotros</li>
      </ul>

      <ul className="footer-methods">Métodos de Pago
        <li className="footer-methods__item">Bancolombia</li>
        <li className="footer-methods__item">PSE</li>
        <li className="footer-methods__item"> Efectivo</li>
      </ul>
    </div>
  )
}

export default Footer;