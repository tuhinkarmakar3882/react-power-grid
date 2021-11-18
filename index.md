# React Power Grid

A highly customizable and render-less lightweight library to manage Grid related actions.

[![Netlify Status](https://api.netlify.com/api/v1/badges/27a688b2-6479-45e2-81fd-171f52b6e5c7/deploy-status)](https://app.netlify.com/sites/react-power-grid/deploys)
[![Npm package version](https://badgen.net/npm/v/react-power-grid)](https://npmjs.com/package/react-power-grid)


<a href="https://react-power-grid.netlify.app/" target="_blank"> View the demo </a> or <a href="https://tuhinkarmakar3882.github.io/react-power-grid/" target="_blank"> Read the Docs </a>

## Contributors:

| Name                  | Connect via |
| ------                | ------         | 
| Tuhin Karmakar  | <a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) </a> |
| Manogna Tata    | <a href="https://www.linkedin.com/in/manogna-tata/" target="_blank">![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) </a>      |

## Features:

- ✅ Supports Event Delegation out of the box
- ✅ Has Modular Components
- ✅ Bring your own CSS Styles
- ✅ Override most sensible defaults with CSS-variables
- ✅ Mix and Match the layout components to create your own unique version of a Grid
- ✅ Uses only raw HTML tags and no 3rd party dependency
- ✅ Configurable via attributes

## Dependencies

This package uses the `"sass": "^1.43.4"`

> Therefore, Please ensure that your `react` project has `sass` installed or you can install it with `npm install --save-dev sass` or `yarn add --dev sass`

## How to run from the source code?

- Clone the repo
- `npm run install` or `yarn install`
- `npm run start` or `yarn start`

---

## This library comes with the following

#### PreConfigured Layouts

- `PowerGrid.jsx`

#### Grid Sections

- `PowerGridTopBar.jsx`
- `PowerGridHeader.jsx`
- `PowerGridBody.jsx`
- `PowerGridFooter.jsx`

#### Utilities

- `PowerGridSearchBar.jsx`
- `PowerGridDropdown.jsx`
- `PowerGridMoreFilters.jsx`

#### PowerGrid SCSS Styles

- `Base.scss`
- `Body.scss`
- `Footer.scss`
- `TopBar.scss`
- `Header.scss`
- `MoreFilters.scss`

> These are all partial stylesheets. You can import only the bits and pieces you need. However, if you want to use all preconfigured styles, feel free to import the `index.scss`

---

## Supported Events

- `search`
- `sort`
- `pagination`
- `toggle-row-selection`
- `dropdown-change`
- `select-all-columns`

## Events in Details

> All payloads are accessible via `event.detail`

### 1. The `search` Event

Search event is fired whenever we put contents in the search field and hit enter. Here"s the Payload:

```json
{
  "query": "String"
}
```

### 2. The `sort` Event

This event is fired whenever the header column is clicked. Here"s the Payload:

```json
{
  "columnName": "String",
  "sortOrder": "String (ASC | DESC)"
}
```

### 3. The `pagination` Event

This event is fired whenever the user tries to move to a previous page or the next page. Here"s the Payload:

```json
{
  "currentPage": "Number",
  "mode": "String ( Backward | Forward )"
}
```

### 4. The `toggle-row-selection` Event

This is fired whenever a checkbox of a row is being selected. Here"s the Payload:

```json
{
  "rowIdx": "Number"
}
``` 

### 5. The `dropdown-change` Event

This is fired when the user tries to change the filters using the dropdown. Here"s the Payload:

```json
{
  "filter": {
    "name": "String",
    "value": "FilterValue"
  }
}
``` 

### 6. The `select-all-columns` Event

This is fired whenever the user tries to select the checkbox in the header. Here"s the Payload:

```json
{
  "checkedState": "Boolean"
}
``` 

---

## To use bare minimum styling

You can import/extend the following as per your requirements,

1. `react-power-grid/dist/styles/PowerGrid/index.scss`
2. `react-power-grid/dist/styles/PowerGrid/_Base.scss`
3. `react-power-grid/dist/styles/PowerGrid/_Body.scss`
4. `react-power-grid/dist/styles/PowerGrid/_Footer.scss`
5. `react-power-grid/dist/styles/PowerGrid/_Header.scss`
6. `react-power-grid/dist/styles/PowerGrid/_MoreFilters.scss`
7. `react-power-grid/dist/styles/PowerGrid/_TopBar.scss`

## To Override/ Bring your Own StyleSheets

You can Create your own css/scss files and put the structure like this

```scss
.power-grid {
  nav {
    //  Put Your custom styles for top bar
  }

  header {
    //  Put Your custom styles for header
  }

  main {
    //  Put Your custom styles for grid body
  }

  footer {
    //  Put Your custom styles for grid footer
  }
}
```

## How to use it?

### 1. &lt;PowerGrid /&gt;

Sample Usage:

```jsx
<PowerGrid
  loading={Boolean}
  topBar={<ReactComponent/>}
  gridHeader={<ReactComponent/>}
  gridBody={<ReactComponent/>}
  gridFooter={<ReactComponent/>}
  loadingComponent={<ReactComponent/>}
/>
 ```

More Info on Props:

```json
{
  "loading": "This is used to show/hide the spinner while fetching data from the server",
  "topBar": "Any React Component || <PowerGridTopBar  />",
  "gridHeader": "Any React Component || <PowerGridHeader  />",
  "gridBody": "Any React Component || <PowerGridBody  />",
  "gridFooter": "Any React Component || <PowerGridFooter  />",
  "loadingComponent": "Any React Component || <Spinner  />"
}
```

To use the default styling for this component please import/extend  `react-power-grid/dist/styles/PowerGrid/index.scss`

Note: You can always have your custom components in place of pre-baked ones.

### 2. &lt;PowerGridTopBar /&gt;

Sample Usage:

```jsx
<PowerGridTopBar
  filters={topBarFilters}
  moreFilters={<ReactComponent/>}
  searchBar={<ReactComponent/>}
/>
```

More Info on Props:

```json
{
  "filters": "This is a JSON Array Of Objects which is used to provide filters that can be applied on the PowerGrid.",
  "moreFilters": "<PowerGridMoreFilters /> || Any React component",
  "searchBar": "<PowerGridSearchBar /> || Any React Component."
}
```

Example of how filters Array looks like:

```javascript
const filter = [
  {
    "name": "First Filter",
    "options": [
      "Option 1",
      "Option 2",
      "Option 4"
    ],
    "allowMultiSelect": true
  },
  {
    "name": "Second Filter",
    "options": [
      "Option 1",
      "Option 2",
      "Option 4"
    ],
    "allowMultiSelect": false
  }
  // put more filters like this
]
```

In Case if you want to Bring your Own Component while using the same Object Syntax, You can do so with the following:

```javascript
const filter = [
  {
    "name": "Custom Filter Implementation",
    "options": [
      // EVERYTHING WILL BE IGNORED
    ],
    "allowMultiSelect": "THIS WILL BE IGNORED",
    "custom": <ReactComponent/>
  },
]
```

In the Custom React Component, you can do anything you want but, remember to add a custom event emission in the onchange
section. For example,

```javascript
const emitCustomEvent = ({target}) => {
  target.dispatchEvent(new CustomEvent('your-own-on-change-event-name', {
      bubbles: true,
      detail: {
        filter: {
          name: item.name,
          value: target.value
        }
      }
    })
  )
}
```

Then you can add your own handler to it

```javascript
parentNode.addEventListener('your-own-on-change-event-name', ({detail}) => {
  doSomething(detail)
})
```

### 3. &lt;PowerGridHeader /&gt;

Sample Usage:

```jsx
<PowerGridHeader columns={gridHeaderColumns}/>
```

More Info on Props:

```json
{
  "columns": "This is an array of Objects that consists of header columns"
}
```

The `gridHeaderColumns` is defined as:

```javascript
const gridHeaderColumns = ["Column 1", "Column 2", "Column 3", "Column N"]
```

### 4. &lt;PowerGridBody /&gt;

Sample Usage:

```jsx
<PowerGridBody gridData={gridBodyData}
```

More Info on Props:

```json
{
  "gridData": "This is a multidimensional array consisting the data that needs to be inserted in the Grid."
}
```

Example of how gridBodyData looks like:

```javascript
const gridBodyData = [
  [true, "col 1", "col 2", "col 3"], // row 1
  [true, "col 1", "col 2", "col 3"], // row 1
  [true, "col 1", "col 2", "col 3"], // row 1
]

/* The Generic Structure is :
  [
    [ InputCheckBoxValue (True / False), Column 1, Column 2, ..., Column N], // ROW 1
    [ InputCheckBoxValue (True / False), Column 1, Column 2, ..., Column N], // ROW 2
  ]
*/ 
```

### 5. &lt;PowerGridFooter /&gt;

Sample Usage:

```jsx
<PowerGridFooter
  hasNext={Boolean}
  hasPrevious={Boolean}
  currentPage={Number}
  totalPages={Number}
/>
```

More Info on Props:

```json
{
  "hasNext": "This is used to enable/disable the next button in Footer. When False, next button is disabled.",
  "hasPrevious": "This is used to enable/disable the prev button in Footer. When False, prev button is disabled.",
  "currentPage": "This shows the current page number",
  "totalPages": "this shows the total number of pages"
}
```

### 6. &lt;PowerGridMoreFilters /&gt;

Sample Usage:

```jsx
<PowerGridMoreFilters>
  {children}
</PowerGridMoreFilters>
```

More Info on Props:

```json
{
  "children": "You can put any React Component here. You can also use PowerGridDropdown or PowerGridSearchBar or any custom react component."
}
```

However, make sure to dispatch the following event while implementing your own version.

```javascript
const emitCustomEvent = ({target}) => {
  target.dispatchEvent(new CustomEvent('more-filter-change', {
    bubbles: true,
    detail: {
      filter: {
        name: item.name,
        value: target.value
      }
    }
  }))
}
```

Then you can add your own handler to it

```javascript
parentNode.addEventListener('more-filter-change', ({detail}) => {
  doSomething(detail)
})
```

### 7. &lt;PowerGridSearchBar /&gt;

Sample Usage:

```jsx
<PowerGridSearchBar/>
```

### 8. &lt;PowerGridDropdown /&gt;

Sample Usage:

```jsx
<PowerGridDropdown item={item}/>
```

More Info on Props:

```json
{
  "item": {
    "name": "FilterName",
    "options": [
      "Option Value 1",
      "Option Value 2"
    ],
    "allowMultiSelect": "Boolean"
  }
}
```

For Example, we can create a PowerGrid component as follows:

```jsx
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
```

## One Final Example

```jsx
import React, {useEffect, useRef, useState} from 'react'
import {gridBodyData, gridHeaderColumns, topBarFilters} from './seed/data'
import {
  PowerGrid,
  PowerGridBody,
  PowerGridDropdown,
  PowerGridFooter,
  PowerGridHeader,
  PowerGridMoreFilters,
  PowerGridSearchBar,
  PowerGridTopBar,
} from 'react-power-grid'
import 'react-power-grid/dist/styles/PowerGrid/index.scss'

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

  const logEventDetails = ({type, detail}) => {
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
    </div>
  )
}

export default App
```

A highly customizable and render-less lightweight library to manage Grid related actions.

[![Netlify Status](https://api.netlify.com/api/v1/badges/27a688b2-6479-45e2-81fd-171f52b6e5c7/deploy-status)](https://app.netlify.com/sites/react-power-grid/deploys)
[![Npm package version](https://badgen.net/npm/v/react-power-grid)](https://npmjs.com/package/react-power-grid)


<a href="https://react-power-grid.netlify.app/" target="_blank"> View the demo </a>

## Contributors:

| Name                  | Connect via |
| ------                | ------         | 
| Tuhin Karmakar  | <a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) </a> |
| Manogna Tata    | <a href="https://www.linkedin.com/in/manogna-tata/" target="_blank">![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) </a>      |


