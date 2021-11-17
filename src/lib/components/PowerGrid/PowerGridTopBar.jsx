import React from 'react'
import PowerGridDropdown from './PowerGridDropdown'

const PowerGridTopBar = ({ filters, moreFilters, searchBar }) => {
  const renderFilters = () => {
    return filters.map((item) => (
      <li key={item.name}>
        {item?.custom || <PowerGridDropdown item={item} />}
      </li>
    ))
  }

  return (
    <nav className="power-grid-filter">
      <ul className="left-filters">{renderFilters()}</ul>

      <ul className="right-filters">
        {searchBar}

        {moreFilters}
      </ul>
    </nav>
  )
}

export default PowerGridTopBar
