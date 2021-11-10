import React, { useEffect, useRef, useState } from 'react'
import PowerTable from './components/PowerTable'
import PowerTableTopBar from './components/PowerTableTopBar'
import PowerTableHeader from './components/PowerTableHeader'
import PowerTableBody from './components/PowerTableBody'
import PowerTableFooter from './components/PowerTableFooter'
import PowerTableSearchBar from './components/PowerTableSearchBar'
import PowerTableMoreFilters from './components/PowerTableMoreFilters'

const App = () => {
  const [headerColumns, setHeaderColumns] = useState([])
  const [tableData, setTableData] = useState([])
  const [hasNext, setHasNext] = useState(true)
  const [hasPrevious, setHasPrevious] = useState(false)
  const powerTableContainer = useRef(null)

  const loadDataFromApi = (evt) => {
    console.log(evt.detail)
  }

  useEffect(() => {
    setHeaderColumns([
      { id: 0, name: 'ID' },
      { id: 1, name: 'Name' },
      { id: 2, name: 'Age' },
      { id: 3, name: 'Phone number' },
      { id: 4, name: 'Something Else' }
    ])
    setTableData([
      ['1', 'SuperName', 25, '+919362145879', 'Apple'],
      ['2', 'New Super Name', 5, '+919362145879', 'Ice Cream'],
      ['3', 'SuperName', 25, '+919362145879', 'Ice Cream'],
      ['4', 'SuperName', 15, '+919362145879', 'Ice Cream'],
      ['5', 'SuperName', 75, '+919362145879', 'Ice Cream']
    ])

    setHasNext(true)
    setHasPrevious(false)

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
            filters={undefined}
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
