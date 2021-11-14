import React from 'react'

const PowerTableDropDown = ({ item }) => {
  const renderOptions = () => {
    return item.options.map((option, idx) => (
      <option key={idx} value={option}>
        {option}
      </option>
    ))
  }

  const emitDropdownChangeEvent = ({ target }) => {
    target.dispatchEvent(new CustomEvent('dropdown-change', {
      bubbles: true,
      detail: {
        filter: {
          name: item.name,
          value: target.value
        }
      }
    }))
  }

  return (
    <label>
      {item.name}
      <select name={item.name} onChange={emitDropdownChangeEvent}>{renderOptions()}</select>
    </label>
  )
}

export default PowerTableDropDown
