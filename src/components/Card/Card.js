import React from 'react' 
import classNames  from "classnames"
import PropTypes from 'prop-types'

import './card.scss'

export const Card = ({ className, background, children }) => {

  const dinamicClasses = classNames('card', className)

  return <div className={dinamicClasses} style={{backgroundColor: background}}>
    {children}
  </div>
}

Card.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node
}

export default Card;