import React, { useEffect, useState } from 'react'
import PowerTable from './components/PowerTable'

const App = () => {
  const [headerColumns, setHeaderColumns] = useState([])
  const [tableData, setTableData] = useState([])

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

    document.getElementById('power-table-container').addEventListener(
      'sort', (e) => console.log(e.detail)
    )
  }, [])

  return (
    <section id="power-table-container">
      <PowerTable headerColumns={headerColumns} tableData={tableData}/>
    </section>
  )
}

export default App
