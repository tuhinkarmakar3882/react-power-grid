import React from 'react'

const PowerGridSearchBar = () => {
  const emitSearchEvent = ({ keyCode, target }) => {
    if (keyCode !== 13) return

    target.dispatchEvent(new CustomEvent('search', {
      bubbles: true,
      detail: {
        query: target.value
      }
    }))
  }

  return (
    <input type="text" placeholder="Search" onKeyUp={emitSearchEvent} />
  )
}

export default PowerGridSearchBar
