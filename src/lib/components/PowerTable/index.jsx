import React from 'react'
import Spinner from '../Spinner'

const PowerTable = ({
  topBar,
  tableHeader,
  tableBody,
  tableFooter,
  loading = false,
  loadingComponent = Spinner
}) => {
  return (
    <div className="power-table">
      {topBar}

      {tableHeader}

      {loading ? loadingComponent : tableBody}

      {tableFooter}
    </div>
  )
}

export default PowerTable
