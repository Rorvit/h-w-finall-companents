import React from 'react'
import PropTypes from 'prop-types'

const BookMark = ({ status, ...rest }) => {
  let classes = ''
  status ? (classes = 'bi bi-bookmark-fill') : (classes = 'bi bi-bookmark')
  return (
    <button {...rest}>
      <i className={classes}></i>
    </button>
  )
}

BookMark.propTypes = {
  status: PropTypes.bool
}

export default BookMark
