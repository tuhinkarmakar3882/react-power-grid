import React from 'react'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'

const PowerGrid = ({
  topBar,
  tableHeader,
  tableBody,
  tableFooter,
  loading = false,
  loadingComponent = <Spinner/>
}) => {
  return (
    <div className="power-grid">
      {topBar}

      {tableHeader}

      {loading ? loadingComponent : tableBody}

      {tableFooter}
    </div>
  )
}

PowerGrid.propTypes = {
  loading: PropTypes.bool
}

export default PowerGrid
