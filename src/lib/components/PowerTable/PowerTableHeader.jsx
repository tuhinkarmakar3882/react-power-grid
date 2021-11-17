import React, { useState } from 'react'

const PowerTableHeader = ({ columns = [] }) => {
  const [checkboxState, setCheckboxState] = useState(false)

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

  const renderHeaderColumns = () => columns.map(item => (
    <section key={item.id} className="column" data-column-name={item.name} data-sort-order={undefined}>
      {item.name}
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

export default PowerTableHeader
