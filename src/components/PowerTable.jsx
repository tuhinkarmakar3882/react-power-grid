import React from 'react'
import '../styles/PowerTable.scss'

const PowerTable = ({
  headerColumns,
  tableData
}) => {
  const renderHeaderColumns = () => headerColumns.map(item => (
    <section key={item.id} className="column">{item.name}</section>
  ))

  const renderRows = () => tableData.map((row, rowIdx) => (
    <section className="row" key={'row-' + rowIdx}>
      {renderColumns(row, rowIdx)}
    </section>
  ))

  const renderColumns = (row, rowIdx) => row.map((column, columnIdx) => (
    <section className="column" key={`row-${rowIdx} | column-${columnIdx}`}>
      {column}
    </section>
  ))

  return (
    <div className="power-table">
      <header className="row">{renderHeaderColumns()}</header>

      <main>{renderRows()}</main>

      <footer>
        <button>Previous</button>
        <p>Page Number</p>
        <button>Next</button>
      </footer>
    </div>
  )
}

export default PowerTable
