import React from 'react'
import '../styles/services.scss'
import Select from './select-ico'


function Services () {

  return (
    <div className="container">
      <nav className="container-menu">
        <ul>
          <li className="container-menu__item">Quienes Somos</li>
          <li className="container-menu__item">Servicios</li>
          <li className="container-menu__item">Pagos</li>
          <li className="container-menu__item">Planes</li>
          <li className="container-menu__item">Trabaja con Nosotros</li>
        </ul>
      </nav>

      <main className="container-main">
        <h2 className="container-main__h2">Trabaja con Nosotros</h2>
        <ul>
          
          <li className="container-main__item"><p>Doméstico Mensual <br/><span>Ver más</span></p><div className="container-main__item--selection"><Select /></div></li>
          <li className="container-main__item"><p>Doméstico día <br/><span>Ver más</span></p><div className="container-main__item--selection"><Select /></div></li>
          <li className="container-main__item"><p>Oficina día <br/><span>Ver más</span></p><div className="container-main__item--selection"><Select /></div></li>
          <li className="container-main__item"><p>Planchado <br/><span>Ver más</span></p><div className="container-main__item--selection"><Select /></div></li>
        </ul>

        <div className="show-card">
          <div className="show-card__uno">
          <h2 className="show-card__title">Doméstico Mensual <span>Características</span></h2>
          <p className="show-card__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam 
            erat volutpat. <br/> Ut Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit, sed diam nonummy nibh 
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut</p>
          </div>

          <div className="show-card__dos">
            <p><b>$</b>2.127.661 - <span>COP</span></p>
            <div className="show-card__dos--logo">Logo</div>
            <div className="show-card__dos--button">Contratar el servicio</div>
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