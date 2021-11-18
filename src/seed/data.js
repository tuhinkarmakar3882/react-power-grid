export const gridHeaderColumns = ['ID', 'Name', 'Age', 'Phone number', 'Something Else']

const col1 = [true, '1', 'SuperName', 25, '+919362145879', 'Apple']
const col2 = [false, '2', 'New Super Name', 5, '+919362145879', 'Ice Cream']
const col3 = [true, '3', 'SuperName', 25, '+919362145879', 'Ice Cream']
const col4 = [false, '4', 'SuperName', 15, '+919362145879', 'Ice Cream']
const col5 = [false, '5', 'SuperName', 75, '+919362145879', 'Ice Cream']

export const gridBodyData = [
  col1,
  col2,
  col3,
  col4,
  col5
]

export const topBarFilters = [
  {
    name: 'First Filter',
    options: [
      'Option 1',
      'Option 2',
      'Option 4'
    ],
    allowMultiSelect: true
  },
  {
    name: 'Second Filter',
    options: [
      'Option 1',
      'Option 2',
      'Option 4'
    ],
    allowMultiSelect: false
  }
]
