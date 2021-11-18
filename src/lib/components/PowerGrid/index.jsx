import React from 'react'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'

const PowerGrid = ({
  topBar,
  gridHeader,
  gridBody,
  gridFooter,
  loading = false,
  loadingComponent = <Spinner/>
}) => {
  return (
    <div className="power-grid">
      {topBar}

      {gridHeader}

      {loading ? loadingComponent : gridBody}

      {gridFooter}
    </div>
  )
}

PowerGrid.propTypes = {
  loading: PropTypes.bool
}

export default PowerGrid
