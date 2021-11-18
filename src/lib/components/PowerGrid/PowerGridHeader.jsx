import React, { useState } from 'react'

const PowerGridHeader = ({ columns = [] }) => {
  const [checkboxState, setCheckboxState] = useState(false)
  const [uniqueIdentifier] = useState(Date.now())

  const handleEventEmission = ({ target }) => {
    if (target.tagName === 'INPUT') {
      return target.dispatchEvent(new CustomEvent('select-all-columns', {
        bubbles: true,
        detail: {
          checkedState: target.checked
        }
      }))
    }

    const columnName = target.getAttribute('data-column-name')
    const previousSortOrder = target.getAttribute('data-sort-order')
    let newSortOrder = 'DESC'

    if (!previousSortOrder || previousSortOrder === 'DESC') {
      newSortOrder = 'ASC'
    }

    target.setAttribute('data-sort-order', newSortOrder)

    if (!previousSortOrder) target.classList.add(newSortOrder)
    target.classList.replace(previousSortOrder, newSortOrder)

    target.dispatchEvent(new CustomEvent('sort', {
      bubbles: true,
      detail: {
        columnName,
        sortOrder: newSortOrder
      }
    }))
  }

  const renderHeaderColumns = () => columns.map((column, idx) => (
    <section key={`${uniqueIdentifier}-${idx}`} className="column" data-column-name={column}
             data-sort-order={undefined}>
      {column}
    </section>
  ))

  return (
    <header className="row" onClick={handleEventEmission}>

      <input
        type="checkbox"
        onChange={() => setCheckboxState(!checkboxState)}
        value={checkboxState}
        checked={checkboxState}
      />

      {renderHeaderColumns()}
    </header>
  )
}

export default PowerGridHeader
