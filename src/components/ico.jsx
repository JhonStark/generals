import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class Icon extends Component {
  render() {
    const { color, size } = this.props;
    return(
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 28.2 28.2"  xmlSpace="preserve" height={size} width={size}>
<g fill={color}>
<path class="st0" d="M28.1,14.2c0-7.7-6.3-14-14-14s-14,6.3-14,14s6.3,14,14,14S28.1,21.9,28.1,14.2z M2.4,14.2
	c0-6.4,5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7s-5.2,11.7-11.7,11.7S2.4,20.6,2.4,14.2z"/>
<path class="st0" d="M15,18.8l6.6-6.7c0.5-0.5,0.2-1.2-0.2-1.6l-1.6-1.6c-0.5-0.5-1-0.5-1.4,0L14.1,13L9.9,8.8
	c-0.5-0.5-1.1-0.5-1.5,0l-1.6,1.6c-0.5,0.5-0.7,1.2-0.2,1.6l6.7,6.7C13.6,19.2,14.6,19.2,15,18.8z M7.6,11.4l1.6-1.6l4.9,4.9L19,9.8
	l1.6,1.6L14,18.1L7.6,11.4z"/>
  </g>
</svg>
      
    )
  }
}



Icon.propTypes = {
  color: string,
  size : number
}

Icon.defaultProps = {
  color: '#145DA0',
  size: 20
}


