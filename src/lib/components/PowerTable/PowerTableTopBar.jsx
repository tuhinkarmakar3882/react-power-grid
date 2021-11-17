import React from 'react'
import PowerTableDropDown from './PowerTableDropDown'

const PowerTableTopBar = ({ filters, moreFilters, searchBar }) => {
  const renderFilters = () => {
    return filters.map((item) => (
      <li key={item.name}>
        {item?.custom || <PowerTableDropDown item={item} />}
      </li>
    ))
  }

  return (
    <nav className="power-table-filter">
      <ul className="left-filters">{renderFilters()}</ul>

      <ul className="right-filters">
        {searchBar}

        {moreFilters}
      </ul>
    </nav>
  )
}

export default PowerTableTopBar
