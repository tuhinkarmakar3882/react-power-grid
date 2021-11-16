# React Power Table

A highly customizable and render-less lightweight library to manage TABLE related actions.

<a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) </a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/27a688b2-6479-45e2-81fd-171f52b6e5c7/deploy-status)](https://app.netlify.com/sites/react-power-table/deploys)

See Demo at: https://react-power-table.netlify.app/

Documentation: https://tuhinkarmakar3882.github.io/react-power-table/

## Features:

- [x] Supports Event Delegation out of the box
- [x] Has Modular Components
- [x] Bring your own CSS Styles
- [x] Override most sensible defaults with CSS-variables
- [x] Mix and Match the layout components to create your own unique version of a table
- [x] Uses only raw HTML tags and no 3rd party dependency
- [x] Configurable via attributes

## How to run from the source code?

- Clone the repo
- `npm run install` or `yarn install`
- `npm run start` or `yarn start`

---

## This library comes with the following

#### PreConfigured Layouts

- `PowerTable.jsx`

#### Table Sections

- `PowerTableTopBar.jsx`
- `PowerTableHeader.jsx`
- `PowerTableBody.jsx`
- `PowerTableFooter.jsx`

#### Utilities

- `PowerTableSearchBar.jsx`
- `PowerTableDropDown.jsx`
- `PowerTableMoreFilters.jsx`

#### PowerTable SCSS Styles

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

