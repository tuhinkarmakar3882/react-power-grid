import React from 'react'
import Spinner from '../Spinner'

const PowerGrid = ({
  topBar,
  tableHeader,
  tableBody,
  tableFooter,
  loading = false,
  loadingComponent = Spinner
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

export default PowerGrid
