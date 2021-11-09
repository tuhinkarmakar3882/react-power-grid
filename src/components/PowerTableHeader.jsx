import React from 'react'

const PowerTableHeader = ({
  columns = []
}) => {
  const handleToggleAction = ({ target }) => {
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
        [columnName]: newSortOrder
      }
    }))
  }

  const renderHeaderColumns = () => columns.map(item => (
    <section key={item.id} className="column" data-column-name={item.name} data-sort-order={undefined}>
      {item.name}
    </section>
  ))

  return (
    <header className="row" onClick={handleToggleAction}>
      {renderHeaderColumns()}
    </header>
  )
}

export default PowerTableHeader
