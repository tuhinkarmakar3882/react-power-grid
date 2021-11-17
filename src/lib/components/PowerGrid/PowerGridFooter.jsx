import React from 'react'

const PowerGridFooter = ({
  hasNext = false,
  hasPrevious = false,
  currentPage = 1,
  totalPages = 1
}) => {
  const handlePaginationEvent = ({ target }) => {
    if (target.tagName !== 'BUTTON') return

    const actionType = target.getAttribute('data-action')
    target.dispatchEvent(new CustomEvent('pagination', {
      bubbles: true,
      detail: {
        currentPage,
        mode: actionType
      }
    }))
  }

  return (
    <footer onClick={handlePaginationEvent}>
      <button disabled={!hasPrevious} data-action="Backward">Previous</button>

      <p>{currentPage} of {totalPages}</p>

      <button disabled={!hasNext} data-action="Forward">Next</button>
    </footer>
  )
}

export default PowerGridFooter
