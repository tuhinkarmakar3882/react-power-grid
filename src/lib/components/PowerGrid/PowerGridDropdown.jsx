import React from 'react'

const PowerGridDropdown = ({ item }) => {
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
          value: [...target.options].filter(option => option.selected).map(option => option.value)
        }
      }
    }))
  }

  return (
    <label>
      {item.name}
      <select multiple={item?.allowMultiSelect} name={item.name}
              onChange={emitDropdownChangeEvent}>{renderOptions()}</select>
    </label>
  )
}

export default PowerGridDropdown
