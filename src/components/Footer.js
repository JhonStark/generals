import React from 'react'
import '../styles/Footer.scss'
import Facebook  from './facebook'


function Footer () {
  return (
    <div>
      <ul> Contactos
        <li></li>
        <li><Facebook  /></li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Email: generalservices@gmail.com</li>
        <li>WhatsApp: 3008626756</li>
      </ul>

      <ul>
          <li>Quienes Somos</li>
          <li>Servicios</li>
          <li>Pagos</li>
          <li>Planes</li>
          <li>Trabaja con Nosotros</li>
      </ul>

      <ul>Métodos de Pago
        <li>Bancolombia</li>
        <li>PSE</li>
        <li>Efectivo</li>
      </ul>
    </div>
  )
}

export default Footer;