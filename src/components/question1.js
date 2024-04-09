import React from 'react'

import PropTypes from 'prop-types'

import './question1.css'

const Question1 = (props) => {
  return (
    <div className="question1-container">
      <span className="question1-text heading3">{props.question}</span>
      <span className="bodySmall">{props.io}</span>
    </div>
  )
}

Question1.defaultProps = {
  io: 'Ho 19 anni, fatti a febbraio',
  question: 'Quanti anni hai?',
}

Question1.propTypes = {
  io: PropTypes.string,
  question: PropTypes.string,
}

export default Question1
