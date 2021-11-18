import React, { useEffect, useRef, useState } from 'react'
import { gridBodyData, gridHeaderColumns, topBarFilters } from './seed/data'
import PowerGrid from './lib/components/PowerGrid'
import PowerGridTopBar from './lib/components/PowerGrid/PowerGridTopBar'
import PowerGridHeader from './lib/components/PowerGrid/PowerGridHeader'
import PowerGridBody from './lib/components/PowerGrid/PowerGridBody'
import PowerGridFooter from './lib/components/PowerGrid/PowerGridFooter'
import PowerGridSearchBar from './lib/components/PowerGrid/PowerGridSearchBar'
import PowerGridMoreFilters from './lib/components/PowerGrid/PowerGridMoreFilters'
import PowerGridDropdown from './lib/components/PowerGrid/PowerGridDropdown'
import './lib/styles/PowerGrid/index.scss'
import './lib/styles/Spinner.module.css'

const App = () => {
  const powerTableContainer = useRef(null)

  const [emittedEvent, setEmittedEvent] = useState(null)
  const [isDataLoading] = useState(false)

  const [headerColumns] = useState(gridHeaderColumns)
  const [gridData, setGridData] = useState(gridBodyData)

  const [hasNext] = useState(true)
  const [hasPrevious] = useState(false)

  const [filter] = useState(topBarFilters)
  const [moreFilters] = useState(topBarFilters)

  const logEventDetails = ({ type, detail }) => {
    setEmittedEvent({
      type, detail
    })
    console.log(type, detail)
  }

  const handleIndividualRowSelection = (evt) => {
    logEventDetails(evt)

    const rowIdx = evt.detail.rowIdx
    const updatedGridData = [...gridData]

    updatedGridData[rowIdx][0] = !updatedGridData[rowIdx][0]
    setGridData(updatedGridData)
  }
  const handleAllRowSelection = (evt) => {
    logEventDetails(evt)

    const checkedState = evt.detail.checkedState
    setGridData(gridData.map(item => {
      item[0] = checkedState
      return item
    }))
  }

  const showEventDetails = () => (
    <pre>Event Type: {emittedEvent?.type}<br/>Event Details: {JSON.stringify(emittedEvent?.detail)}</pre>
  )

  const getMoreFilters = () =>
    moreFilters.map((item) => (
      <li key={item.name}>
        {item?.custom || <PowerGridDropdown item={item}/>}
      </li>
    ))

  useEffect(() => {
    powerTableContainer?.current.addEventListener('sort', logEventDetails)
    powerTableContainer?.current.addEventListener('pagination', logEventDetails)
    powerTableContainer?.current.addEventListener('search', logEventDetails)
    powerTableContainer?.current.addEventListener('toggle-row-selection', handleIndividualRowSelection)
    powerTableContainer?.current.addEventListener('select-all-columns', handleAllRowSelection)
    powerTableContainer?.current.addEventListener('dropdown-change', logEventDetails)
  }, [])

  useEffect(() => () => {
    powerTableContainer?.current.removeEventListener('sort', logEventDetails)
    powerTableContainer?.current.removeEventListener('pagination', logEventDetails)
    powerTableContainer?.current.removeEventListener('search', logEventDetails)
    powerTableContainer?.current.removeEventListener('toggle-row-selection', handleIndividualRowSelection)
    powerTableContainer?.current.removeEventListener('select-all-columns', handleAllRowSelection)
    powerTableContainer?.current.removeEventListener('dropdown-change', logEventDetails)
  }, [])

  return (
    <div className="power-grid-demo">
      <nav>
        <h1>React Power Grid</h1>
        <a href="https://tuhinkarmakar3882.github.io/react-power-grid/" target="_blank" rel="noreferrer">
          <button>View Docs</button>
        </a>
      </nav>

      <main ref={powerTableContainer}>
        <PowerGrid
          loading={isDataLoading}
          topBar={
            <PowerGridTopBar
              filters={filter}
              moreFilters={<PowerGridMoreFilters>{getMoreFilters()}</PowerGridMoreFilters>}
              searchBar={<PowerGridSearchBar/>}
            />
          }
          gridHeader={<PowerGridHeader columns={headerColumns}/>}
          gridBody={<PowerGridBody gridData={gridData}/>}
          gridFooter={
            <PowerGridFooter
              hasNext={hasNext}
              hasPrevious={hasPrevious}
              currentPage={1}
              totalPages={1}
            />
          }
        />
      </main>

      <aside className="event-info">
        <h1>The Event Emitted:</h1>

        {emittedEvent ? showEventDetails() : <pre>Listening for events...</pre>}
      </aside>
    </div>
  )
}

export default App
