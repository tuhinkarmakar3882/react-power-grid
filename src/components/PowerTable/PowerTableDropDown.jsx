import React from 'react'

const PowerTableDropDown = ({ item }) => {
  const renderOptions = () => {
    return item.options.map((option, idx) => (
      <option key={idx} value={option}>
        {option}
      </option>
    ))
  }

  return (
    <label>
      {item.name}
      <select name={item.name}>{renderOptions()}</select>
    </label>
  )
}

export default PowerTableDropDown