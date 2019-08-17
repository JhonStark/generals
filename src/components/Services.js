import React from 'react'
import '../styles/services.scss'
import Select from './select-ico'
import Icon from './ico'


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
        <p className="leyend"><Icon/> Selecciona el Servicio que quieres</p>
        <ul className="ul-service">
          
          <li className="container-main__item">
            <p>Doméstico Mensual <br/><span>Ver más</span></p>
            <div className="container-main__item--selection">
              <Select />
            </div></li>
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
        <h2 className="subtitle">  Éste plan de Servicio le permite contratar  </h2>
          <ul className="sets-container"> 
            <li className="sets-container__item">Número de días</li>
            <li className="sets-container__item">Descarga de Contrato</li>
            <li className="sets-container__item">Selección de Empleada</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Services;