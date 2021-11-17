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

Search event is fired whenever we put contents in the search field and hit enter. Here's the Payload:

```json
{
  "query": "String"
}
```

### 2. The `sort` Event

This event is fired whenever the header column is clicked. Here's the Payload:

```json
{
  "columnName": "String",
  "sortOrder": "String (ASC | DESC)"
}
```

### 3. The `pagination` Event

This event is fired whenever the user tries to move to a previous page or the next page. Here's the Payload:

```json
{
  "currentPage": "Number",
  "mode": "String ( Backward | Forward )"
}
```

### 4. The `toggle-row-selection` Event

This is fired whenever a checkbox of a row is being selected. Here's the Payload:

```json
{
  "rowIdx": "Number"
}
``` 

### 5. The `dropdown-change` Event

This is fired when the user tries to change the filters using the dropdown. Here's the Payload:

```json
{
  "filter": {
    "name": "String",
    "value": "FilterValue"
  }
}
``` 

### 6. The `select-all-columns` Event

This is fired whenever the user tries to select the checkbox in the header. Here's the Payload:

```json
{
  "checkedState": "Boolean"
}
``` 

---

## How to use it?

### 1. &lt;PowerGrid/&gt;

Sample Usage:

```jsx
<PowerGrid
  loading={Boolean}
  topBar={ReactComponent}
  GridHeader={ReactComponent}
  GridBody={ReactComponent}
  GridFooter={ReactComponent}
/>
 ```

More Info on Props:

```json
{
  "loading": "This is used to show/hide the spinner while fetching data from the server",
  "topBar": "This is a React Component that is used to render the Top Navigation Bar",
  "GridHeader": "This is a React Component that is used to render the Grid Header",
  "GridBody": "This is a React Component that is used to render the Grid Body",
  "GridFooter": "This is a React component that is used to render the Grid footer under Grid body"
}
```

### 2. &lt;PowerGridTopBar/&gt;

Sample Usage:

```jsx
<PowerGridTopBar
  filters={JSON Array of Objects}
  moreFilters={ReactComponent}
  searchBar={ReactComponent}
/>
```

More Info on Props:

```json
{
  "filters": "This is a JSON Array Of Objects which is used to provide filters that can be applied on the PowerGrid.",
  "moreFilters": "This is a React component that renders a button when clicked provides more number of Filters",
  "searchBar": "This is a React Component that renders the search text box."
}
```

### 3. &lt;PowerGridHeader/&gt;

Sample Usage:

```jsx
<PowerGridHeader columns={Array of Objects}/>
```

More Info on Props:

```json
{
  "columns": "This is an array of Objects that consists of header columns"
}
```

### 4. &lt;PowerGridBody/&gt;

Sample Usage:

```jsx
<PowerGridBody GridData={array of objects}
```

More Info on Props:

```json
{
  "GridData": "This is a multidimensional array consisting the data that needs to be inserted in the Grid."
}
```

### 5. &lt;PowerGridFooter/&gt;

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
  "hasNext": "This is used to enable/disable the next button in Footer. When False, next button is disabled. ",
  "hasPrevious": "This is used to enable/disable the prev button in Footer. When False, prev button is disabled. ",
  "currentPage": "This shows the current page number",
  "totalPages": "this shows the total number of pages"
}
```

### 6. &lt;PowerGridMoreFilters/&gt;

Sample Usage:

```jsx
<PowerGridMoreFilters>
  {children}
</PowerGridMoreFilters>
```

More Info on Props:

```json
{
  "children": "These are the child components that need to be rendered."
}
```

### 7. &lt;PowerGridSearchBar/&gt;

Sample Usage:

```jsx
<PowerGridSearchBar/>
```

### 8. &lt;PowerGridDropdown/&gt;

Sample Usage:

```jsx
<PowerGridDropdown>{item}<PowerGridDropdown/>

```

More Info on Props:

```json
{
  "item": "Is used for mapping each option with the key."
}
```
