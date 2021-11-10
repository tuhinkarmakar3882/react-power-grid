import React from 'react'

const PowerTableTopBar = ({ filters, moreFilters, searchBar }) => {
  return (
    <nav className="power-table-filter">
      <ul className="left-filters">
        {filters.map(item => (
          <li key={item.name}>
            {
              item?.custom ||
              <label>
                {item.name}
                <select name={item.name}>
                  {item.options.map((option, idx) => (<option key={idx} value={option}>{option}</option>))}
                </select>
              </label>
            }
          </li>
        ))}
      </ul>

      <ul className="right-filters">
        {searchBar}

        {moreFilters}
      </ul>
    </nav>
  )
}

export default PowerTableTopBar
