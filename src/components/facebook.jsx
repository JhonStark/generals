import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class Facebook extends Component {
  render() {
    const { color, size } = this.props;
    return(
      <svg height={size} version="1.1" viewBox="0 0 50 50" width={size} xmlns="http://www.w3.org/2000/svg" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><title/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill={color} id="Facebook"><path d="M25,50 C38.8071194,50 50,38.8071194 50,25 C50,11.1928806 38.8071194,0 25,0 C11.1928806,0 0,11.1928806 0,25 C0,38.8071194 11.1928806,50 25,50 Z M25,47 C37.1502651,47 47,37.1502651 47,25 C47,12.8497349 37.1502651,3 25,3 C12.8497349,3 3,12.8497349 3,25 C3,37.1502651 12.8497349,47 25,47 Z M26.8145197,36 L26.8145197,24.998712 L30.0687449,24.998712 L30.5,21.2076072 L26.8145197,21.2076072 L26.8200486,19.3101227 C26.8200486,18.3213442 26.9207209,17.7915341 28.4425538,17.7915341 L30.4769629,17.7915341 L30.4769629,14 L27.2222769,14 C23.3128757,14 21.9368678,15.8390937 21.9368678,18.9318709 L21.9368678,21.2080366 L19.5,21.2080366 L19.5,24.9991413 L21.9368678,24.9991413 L21.9368678,36 L26.8145197,36 Z M26.8145197,36" id="Oval-1"/></g></g></svg>
    )
  }
}



Facebook.propTypes = {
  color: string,
  size : number
}

Facebook.defaultProps = {
  color: '#D6E3EB',
  size: 50
}