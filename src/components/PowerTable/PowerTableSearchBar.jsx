import React from 'react'
import '../../styles/Spinner.scss'

const PowerTableSearchBar = () => {
  const emmitSearchEvent = ({ keyCode, target }) => {
    if (keyCode !== 13) return

    target.dispatchEvent(new CustomEvent('search', {
      bubbles: true,
      detail: {
        query: target.value
      }
    }))
  }

  return (
    <input type="text" placeholder="Search" onKeyUp={emmitSearchEvent} />
  )
}

export default PowerTableSearchBar
