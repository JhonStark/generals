import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class Select extends Component {
  render() {
    const { color, size } = this.props;
    return(
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 32 32"  xmlSpace="preserve" height={size} width={size}>

<g fill={color}>
  <g fill="#0C2D48">
<circle class="st0" cx="16" cy="16" r="16"/></g>
<path class="st1" d="M16.5,20.8l5.7-5.7c0.4-0.4,0.2-1-0.2-1.4l-1.4-1.4c-0.4-0.4-0.9-0.4-1.2,0l-3.7,3.6l-3.6-3.6
	c-0.4-0.4-0.9-0.4-1.3,0l-1.4,1.4c-0.4,0.4-0.6,1-0.2,1.4l5.7,5.7C15.3,21.2,16.1,21.2,16.5,20.8z M10.1,14.5l1.4-1.4l4.2,4.2
	l4.2-4.2l1.4,1.4l-5.7,5.7L10.1,14.5z"/>
  </g>
</svg>
    )
  }
}



Select.propTypes = {
  color: string,
  size : number
}

Select.defaultProps = {
  color: '#28C628',
  size: 30
}

