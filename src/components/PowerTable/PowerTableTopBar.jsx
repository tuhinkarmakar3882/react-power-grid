import React from 'react'
import PowerTableDropDown from './PowerTableDropDown'
import PowerTableMoreFilters from './PowerTableMoreFilters'

const PowerTableTopBar = ({ filters, moreFilters, searchBar }) => {
  const renderFilters = () => {
    return filters.map((item) => (
      <li key={item.name}>
        {item?.custom || <PowerTableDropDown item={item} />}
      </li>
    ))
  }
  const renderMoreFilters = () => {
    return moreFilters.map((item) => (
      <li key={item.name}>
        {item?.custom || <PowerTableMoreFilters item={item} />}
      </li>
    ))
  }

  return (
    <nav className="power-table-filter">
      <ul className="left-filters">
        {renderFilters()}
        </ul>

      <ul className="right-filters">
        {searchBar}

        {renderMoreFilters()}
      </ul>
    </nav>
  )
}

export default PowerTableTopBar
