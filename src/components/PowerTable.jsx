import React from 'react'
import '../styles/PowerTable.scss'
import PowerTableHeader from './PowerTableHeader'
import PowerTableBody from './PowerTableBody'
import PowerTableFooter from './PowerTableFooter'
import Spinner from './Spinner'

//  Todo:
//   At the top add filters (Dropdown)
//   At the top add searchBar
//   At the top add moreFilters
//   Add a Multiselect option
//   Add support for rendering custom components in each cell
//   Bubble one event onclick of any column/row

const PowerTable = ({
  headerColumns = [],
  tableData = [],
  loading = false,
  hasNext = false,
  hasPrevious = false,
  currentPage = 1,
  totalPages = 1
}) => {
  return (
    <div className="power-table">
      <PowerTableHeader columns={headerColumns}/>

      {loading ? <Spinner/> : <PowerTableBody tableData={tableData}/>}

      <PowerTableFooter
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default PowerTable
