import React from 'react'
import '../styles/PowerTable.scss'

const PowerTable = ({
  headerColumns = [],
  tableData = [],
  loading = false,
  hasNext = false,
  hasPrevious = false,
  currentPage = 1,
  totalPages = 1
}) => {
  const handleToggleAction = ({ target }) => {
    const columnName = target.getAttribute('data-column-name')
    const previousSortOrder = target.getAttribute('data-sort-order')
    let newSortOrder = 'DESC'

    if (!previousSortOrder || previousSortOrder === 'DESC') {
      newSortOrder = 'ASC'
    }

    target.setAttribute('data-sort-order', newSortOrder)

    const event = new CustomEvent('sort', {
      bubbles: true,
      detail: {
        [columnName]: newSortOrder
      }
    })

    target.dispatchEvent(event)
  }

  const renderHeaderColumns = () => headerColumns.map(item => (
    <section key={item.id} className="column" data-column-name={item.name} data-sort-order={undefined}>
      {item.name}
    </section>
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

  const showSpinner = () => (<section className="loader"/>)

  return (
    <div className="power-table">
      <header className="row" onClick={handleToggleAction}>
        {renderHeaderColumns()}
      </header>

      <main>
        {loading ? showSpinner() : renderRows()}
      </main>

      <footer>
        <button disabled={!hasPrevious}>Previous</button>
        <p>{currentPage} of {totalPages}</p>
        <button disabled={!hasNext}>Next</button>
      </footer>
    </div>
  )
}

export default PowerTable
