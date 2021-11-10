import React from 'react'
import '../../styles/PowerTable.scss'
import Spinner from '../Spinner'

//  Todo:
//   At the top add filters (Dropdown)
//   At the top add moreFilters
//   Add a Multiselect option
//   Bubble one event onclick of any column/row

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
