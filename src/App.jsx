import React, { useEffect, useRef, useState } from 'react'
import PowerGrid from './lib/components/PowerGrid'
import PowerGridTopBar from './lib/components/PowerGrid/PowerGridTopBar'
import PowerGridHeader from './lib/components/PowerGrid/PowerGridHeader'
import PowerGridBody from './lib/components/PowerGrid/PowerGridBody'
import PowerGridFooter from './lib/components/PowerGrid/PowerGridFooter'
import PowerGridSearchBar from './lib/components/PowerGrid/PowerGridSearchBar'
import PowerGridMoreFilters from './lib/components/PowerGrid/PowerGridMoreFilters'
import PowerGridDropdown from './lib/components/PowerGrid/PowerGridDropdown'
import './lib/styles/PowerGrid/index.scss'
import './lib/styles/Spinner.module.scss'

const App = () => {
  const powerTableContainer = useRef(null)

  const [headerColumns] = useState([
    { id: 0, name: 'ID' },
    { id: 1, name: 'Name' },
    { id: 2, name: 'Age' },
    { id: 3, name: 'Phone number' },
    { id: 4, name: 'Something Else' }
  ])
  const [tableData, setTableData] = useState([
    [true, '1', 'SuperName', 25, '+919362145879', 'Apple'],
    [false, '2', 'New Super Name', 5, '+919362145879', 'Ice Cream'],
    [true, '3', 'SuperName', 25, '+919362145879', 'Ice Cream'],
    [false, '4', 'SuperName', 15, '+919362145879', 'Ice Cream'],
    [false, '5', 'SuperName', 75, '+919362145879', 'Ice Cream']
  ])
  const hasNext = useState(true)
  const hasPrevious = useState(true)
  const filter = [
    {
      name: 'Status',
      type: 'dropdown',
      options: [
        'Option 1',
        'Option 2',
        'Option 4'
      ]
    },
    {
      name: 'Market',
      type: 'dropdown',
      options: [
        'Option 1',
        'Option 2',
        'Option 4'
      ]
    },
    {
      name: 'Account',
      type: 'dropdown',
      options: [
        'Option 1',
        'Option 2',
        'Option 4'
      ],
      custom: null
    }
  ]

  const logEventDetails = (evt) => {
    console.log(evt.type, evt.detail)
  }

  const handleIndividualRowSelection = (evt) => {
    logEventDetails(evt)

    const newTableData = [...tableData]
    newTableData[evt.detail.rowIdx][0] = !newTableData[evt.detail.rowIdx][0]

    setTableData(newTableData)
  }
  const handleAllRowSelection = (evt) => {
    logEventDetails(evt)

    setTableData(tableData.map(item => {
      item[0] = evt.detail.checkedState
      return item
    }))
  }

  useEffect(() => {
    powerTableContainer.current.addEventListener('sort', logEventDetails)
    powerTableContainer.current.addEventListener('pagination', logEventDetails)
    powerTableContainer.current.addEventListener('search', logEventDetails)
    powerTableContainer.current.addEventListener('toggle-row-selection', handleIndividualRowSelection)
    powerTableContainer.current.addEventListener('select-all-columns', handleAllRowSelection)
    powerTableContainer.current.addEventListener('dropdown-change', logEventDetails)
  }, [])
  useEffect(() => () => {
    powerTableContainer?.current?.removeEventListener('sort', logEventDetails)
    powerTableContainer?.current?.removeEventListener('pagination', logEventDetails)
    powerTableContainer?.current?.removeEventListener('search', logEventDetails)
    powerTableContainer?.current?.removeEventListener('toggle-row-selection', handleIndividualRowSelection)
    powerTableContainer?.current?.removeEventListener('select-all-columns', handleAllRowSelection)
    powerTableContainer?.current?.removeEventListener('dropdown-change', logEventDetails)
  }, [])

  return (
    <section ref={powerTableContainer}>
      <PowerGrid
        loading={false}
        topBar={
          <PowerGridTopBar
            filters={filter}
            moreFilters={
              <PowerGridMoreFilters>
                {filter.map((item) => (
                  <li key={item.name}>
                    {item?.custom || <PowerGridDropdown item={item}/>}
                  </li>
                ))}
              </PowerGridMoreFilters>
            }
            searchBar={<PowerGridSearchBar/>}
          />
        }
        tableHeader={<PowerGridHeader columns={headerColumns}/>}
        tableBody={
          <PowerGridBody tableData={tableData}/>
        }
        tableFooter={
          <PowerGridFooter
            hasNext={hasNext}
            hasPrevious={hasPrevious}
            currentPage={1}
            totalPages={1}
          />
        }
      />

      <footer>
        <small>[Note : Make sure to open your console to see the events popping up]
          <br/>
          <a href="https://tuhinkarmakar3882.github.io/react-power-grid/" target="_blank" rel="noreferrer">
            Read the Documentation
          </a>
        </small>
      </footer>
    </section>
  )
}

export default App
