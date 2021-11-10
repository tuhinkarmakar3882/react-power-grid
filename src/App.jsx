import React, { useEffect, useRef } from 'react'
import PowerTable from './components/PowerTable'
import PowerTableTopBar from './components/PowerTable/PowerTableTopBar'
import PowerTableHeader from './components/PowerTable/PowerTableHeader'
import PowerTableBody from './components/PowerTable/PowerTableBody'
import PowerTableFooter from './components/PowerTable/PowerTableFooter'
import PowerTableSearchBar from './components/PowerTable/PowerTableSearchBar'
import PowerTableMoreFilters from './components/PowerTable/PowerTableMoreFilters'

const App = () => {
  const powerTableContainer = useRef(null)

  const headerColumns = [
    { id: 0, name: 'ID' },
    { id: 1, name: 'Name' },
    { id: 2, name: 'Age' },
    { id: 3, name: 'Phone number' },
    { id: 4, name: 'Something Else' }
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

  const loadDataFromApi = (evt) => {
    console.log(evt.detail)
  }

  useEffect(() => {
    powerTableContainer.current.addEventListener('sort', loadDataFromApi)
    powerTableContainer.current.addEventListener('pagination', loadDataFromApi)
    powerTableContainer.current.addEventListener('search', loadDataFromApi)
  }, [])
  useEffect(() => () => {
    powerTableContainer.current.removeEventListener('sort', loadDataFromApi)
    powerTableContainer.current.removeEventListener('pagination', loadDataFromApi)
    powerTableContainer.current.removeEventListener('search', loadDataFromApi)
  }, [])

  return (
    <section ref={powerTableContainer}>
      <PowerTable
        loading={false}
        topBar={
          <PowerTableTopBar
            filters={filter}
            moreFilters={<PowerTableMoreFilters moreFilters={undefined}/>}
            searchBar={<PowerTableSearchBar/>}
          />
        }
        tableHeader={<PowerTableHeader columns={headerColumns}/>}
        tableBody={<PowerTableBody tableData={tableData}/>}
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
