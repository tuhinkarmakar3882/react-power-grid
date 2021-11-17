import React, { useState } from 'react'

const PowerTableMoreFilters = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false)

  const toggleMoreFilters = () => setIsOpened(!isOpened)

  const showMoreFilters = () => (
    <aside>
      <nav>
        <p>More Filters</p>
        <i onClick={toggleMoreFilters}>&times;</i>
      </nav>
      {children}
    </aside>
  )

  return (
    <section className="power-table-more-filters">
      <button onClick={toggleMoreFilters}>More Filter</button>

      {isOpened && showMoreFilters()}
    </section>
  )
}

export default PowerTableMoreFilters
