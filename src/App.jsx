import React, { useEffect, useRef, useState } from 'react'
import PowerTable from './components/PowerTable'
import PowerTableTopBar from './components/PowerTable/PowerTableTopBar'
import PowerTableHeader from './components/PowerTable/PowerTableHeader'
import PowerTableBody from './components/PowerTable/PowerTableBody'
import PowerTableFooter from './components/PowerTable/PowerTableFooter'
import PowerTableSearchBar from './components/PowerTable/PowerTableSearchBar'

const App = () => {
  const powerTableContainer = useRef(null)

<<<<<<< HEAD
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
=======
  const headerColumns = [
    { id: 0, name: 'Check' },
    { id: 1, name: 'ID' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Age' },
    { id: 4, name: 'Phone number' },
    { id: 5, name: 'Something Else' }
  ]
  const tableData = [
    ['1', 'SuperName', 25, '+919362145879', 'Apple'],
    ['2', 'New Super Name', 5, '+919362145879', 'Ice Cream'],
    ['3', 'SuperName', 25, '+919362145879', 'Ice Cream'],
    ['4', 'SuperName', 15, '+919362145879', 'Ice Cream'],
    ['5', 'SuperName', 75, '+919362145879', 'Ice Cream']
  ]
  const hasNext = true
  const hasPrevious = false
>>>>>>> 6503fe3 (Added checkboxes and modefilters and eventhandlers)
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

<<<<<<< HEAD
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
=======
  const moreFilter = [
    {
      name: 'Archieved',
      type: 'toggleButton',
      options: [
        'Option 1',
        'Option 2'
      ]
    },
    {
      name: 'last updated',
      type: 'dropdown',
      options: [
        'Option 1'
      ]
    }
  ]
  const loadDataFromApi = (evt) => {
    console.log(evt.detail)
  }

  useEffect(() => {
    powerTableContainer.current.addEventListener('sort', loadDataFromApi)
    powerTableContainer.current.addEventListener('pagination', loadDataFromApi)
    powerTableContainer.current.addEventListener('search', loadDataFromApi)
    powerTableContainer.current.addEventListener('select', loadDataFromApi)
    powerTableContainer.current.addEventListener('check', loadDataFromApi)
>>>>>>> 6503fe3 (Added checkboxes and modefilters and eventhandlers)
  }, [])

  useEffect(() => () => {
<<<<<<< HEAD
    powerTableContainer?.current?.removeEventListener('sort', logEventDetails)
    powerTableContainer?.current?.removeEventListener('pagination', logEventDetails)
    powerTableContainer?.current?.removeEventListener('search', logEventDetails)
    powerTableContainer?.current?.removeEventListener('toggle-row-selection', handleIndividualRowSelection)
    powerTableContainer?.current?.removeEventListener('select-all-columns', handleAllRowSelection)
    powerTableContainer?.current?.removeEventListener('dropdown-change', logEventDetails)
=======
    powerTableContainer.current.removeEventListener('sort', loadDataFromApi)
    powerTableContainer.current.removeEventListener('pagination', loadDataFromApi)
    powerTableContainer.current.removeEventListener('search', loadDataFromApi)
    powerTableContainer.current.removeEventListener('select', loadDataFromApi)
    powerTableContainer.current.removeEventListener('check', loadDataFromApi)
>>>>>>> 6503fe3 (Added checkboxes and modefilters and eventhandlers)
  }, [])

  return (
    <section ref={powerTableContainer}>
      <PowerTable
        loading={false}
        topBar={
          <PowerTableTopBar
            filters={filter}
<<<<<<< HEAD
            moreFilters={
              <PowerTableMoreFilters>
                <h1>Put your more filters</h1>
              </PowerTableMoreFilters>
            }
=======
            moreFilters={moreFilter}
>>>>>>> 6503fe3 (Added checkboxes and modefilters and eventhandlers)
            searchBar={<PowerTableSearchBar/>}
          />
        }
        tableHeader={<PowerTableHeader columns={headerColumns}/>}
        tableBody={
          <PowerTableBody tableData={tableData}/>
        }
        tableFooter={
          <PowerTableFooter
            hasNext={hasNext}
            hasPrevious={hasPrevious}
            currentPage={1}
            totalPages={1}
          />
        }
      />
    </section>
  )
}

export default App
