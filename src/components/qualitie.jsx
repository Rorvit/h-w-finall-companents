import React from 'react'
import PropTypes from 'prop-types'

const Qualitie = (props) => {
  return (
    <>
      {props.qualities.map((quality) => (
        <span key={quality._id} className={`badge bg-${quality.color} m-2`}>
          {quality.name}
        </span>
      ))}
    </>
  )
}
Qualitie.propTypes = {
  qualities: PropTypes.array
}

export default Qualitie
