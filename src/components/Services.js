import React from 'react'
import '../styles/services.scss'

function Services () {
  return (
    <div>
      <nav>
        <ul>
          <li>Quienes Somos</li>
          <li>Servicios</li>
          <li>Pagos</li>
          <li>Planes</li>
          <li>Trabaja con Nosotros</li>
        </ul>
      </nav>

      <main>
        <h2>Trabaja con Nosotros</h2>
        <ul>
          <li>Doméstico Mensual <span>v</span></li>
          <li>Doméstico día <span>v</span></li>
          <li>Oficina día <span>v</span></li>
          <li>Planchado <span>v</span></li>
        </ul>

        <div className="show-card">
          <div className="show-card__uno">
          <h2 className="show-card__title">Doméstico Mensual <span>Características</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
            erat volutpat. <br/> Ut Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit, sed diam nonummy nibh 
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut</p>
          </div>

          <div className="show-card__dos">
            <p>2.127.661 - <span>COP</span></p>
            <div>Logo</div>
            <div>Contratar el servicio</div>
          </div>
        </div>

        <div className="sets">
          <ul> Éste plan le permite contratar
            <li>Número de días</li>
            <li>Descarga de Contrato</li>
            <li>Selección de Empleada</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Services;