import React, { useEffect, useRef, useState } from 'react'
import PowerTable from './components/PowerTable'

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
      ['1', 'SuperName', 25, '+919362145879', 'Ice Cream'],
      ['2', 'New Super Name', 5, '+919362145879', 'Ice Cream'],
      ['3', 'SuperName', 25, '+919362145879', 'Ice Cream'],
      ['4', 'SuperName', 15, '+919362145879', 'Ice Cream'],
      ['5', 'SuperName', 75, '+919362145879', 'Ice Cream']
    ])

    setHasNext(true)
    setHasPrevious(false)

    powerTableContainer.current.addEventListener('sort', loadDataFromApi)
  }, [])

  useEffect(() => () => powerTableContainer.current.removeEventListener('sort', loadDataFromApi), [])

  return (
    <section ref={powerTableContainer}>
      <PowerTable
        headerColumns={headerColumns}
        tableData={tableData}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </section>
  )
}

export default App
