import React from 'react'
import '../../styles/PowerTable/index.scss'
import Spinner from '../Spinner'

const PowerTable = ({
  topBar,
  tableHeader,
  tableBody,
  tableFooter,
  loading = false
}) => {
  return (
    <div className="power-table">
      {topBar}

      {tableHeader}

      {loading ? <Spinner/> : tableBody}

      {tableFooter}
    </div>
  )
}

export default PowerTable
