import React from 'react'

const PowerTableBody = ({ tableData = [] }) => {
  const renderRows = () => tableData.map((row, rowIdx) => (
    <section className="row" key={'row-' + rowIdx}>
      {renderColumns(row, rowIdx)}
    </section>
  ))

  const renderColumns = (row, rowIdx) => row.map((column, columnIdx) => (
    <section className="column" key={`row-${rowIdx} | column-${columnIdx}`}>
      {column?.custom || column}
    </section>
  ))

  return (
    <main>
      {renderRows()}
    </main>
  )
}

export default PowerTableBody
