import React from 'react'

const PowerTableTopBar = ({ filters, moreFilters, searchBar }) => {
  return (
    <nav className="power-table-filter">
      <ul className="left-filters">
        <li>
          <label>Status
            <select className="filter">
              <option>All</option>
            </select>
          </label>
        </li>
        <li>
          <label>Status
            <select className="filter">
              <option>All</option>
            </select>
          </label>
        </li>
        <li>
          <label>Status
            <select className="filter">
              <option>All</option>
            </select>
          </label>
        </li>
      </ul>

      <ul className="right-filters">
        {searchBar}

        {moreFilters}
      </ul>
    </nav>
  )
}

export default PowerTableTopBar
