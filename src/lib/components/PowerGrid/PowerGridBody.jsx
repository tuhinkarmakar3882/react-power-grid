import React from 'react'

const PowerGridBody = ({ tableData = [] }) => {
  const emitOnChangeEvent = ({ target }, rowIdx) => {
    target.dispatchEvent(new CustomEvent('toggle-row-selection', {
      bubbles: true,
      detail: { rowIdx }
    }))
  }

  const renderRows = () => tableData.map((row, rowIdx) => (
    <section className="row" key={'row-' + rowIdx}>
      {renderColumns(row, rowIdx)}
    </section>
  ))

  const renderColumns = (row, rowIdx) => row.map((column, columnIdx) => {
    const getColumnKey = `row-${rowIdx} | column-${columnIdx}`

    const isFirstColumn = columnIdx === 0
    const renderColumnItem = () => (column?.custom || column)

    const renderCheckbox = () => (
      <input type="checkbox" checked={column} onChange={(evt) => emitOnChangeEvent(evt, rowIdx)}/>
    )

    return (
      <section className="column" key={getColumnKey}>
        {isFirstColumn ? renderCheckbox() : renderColumnItem()}
      </section>
    )
  })

  const handleOnClick = ({ target }) => {
    target.dispatchEvent(new CustomEvent('selectItem', {
      bubbles: true,
      detail: { hello: 'world' }
    }))
  }

  return (
    <main onClick={handleOnClick}>
      {renderRows()}
    </main>
  )
}

export default PowerGridBody
