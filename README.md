# React Power Table

A highly customizable and render-less lightweight library to manage TABLE related actions.

<a href="https://www.linkedin.com/in/tuhinkarmakar3882/" target="_blank">![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) </a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/27a688b2-6479-45e2-81fd-171f52b6e5c7/deploy-status)](https://app.netlify.com/sites/react-power-table/deploys)

See Demo at: https://react-power-table.netlify.app/

### Features:

- [x] Supports Event Delegation out of the box
- [x] Has Modular Components
- [x] Bring your own CSS Styles
- [x] Override most sensible defaults with CSS-variables
- [x] Mix and Match the layout components to create your own unique version of a table
- [x] Uses only raw HTML tags and no 3rd party dependency
- [x] Configurable via attributes

### How to run from the source code?

- Clone the repo
- `npm run install` or `yarn install`
- `npm run start` or `yarn start`

### This library comes with the following

##### PreBaked Layouts

- `PowerTable.jsx`

##### Table Sections

- `PowerTableTopBar.jsx`
- `PowerTableHeader.jsx`
- `PowerTableBody.jsx`
- `PowerTableFooter.jsx`

##### Utilities

- `PowerTableSearchBar.jsx`
- `PowerTableDropDown.jsx`
- `PowerTableMoreFilters.jsx`

##### SCSS Styles

- `PowerTable styles`
    - `Base.scss`
    - `index.scss`
    - `Body.scss`
    - `Footer.scss`
    - `TopBar.scss`
    - `Header.scss`
    - `MoreFilters.scss`

##### Supported Events
- `search`
- `sort`
- `pagination`
- `toggle-row-selection`
- `dropdown-change`
- `select-all-columns`

###### search 
- Search event is called when we try to search a text in the table. It's called when user types a text in text input and hits enter.

##### sort
- sort event handler is called whenever the header column is clicked.

##### pagination
- pagination event handler is called whenever the user tries to move to a previous page or the next page.

##### toggle-row-selection
- toggle-row-selection is called whenever a row is selected.

##### dropdown-change
- dropdown-change is called whenever the user try to change the filters using the dropdown.

##### select-all-columns
- select-all-columns is called whenever the user tries to select the checkbox in the header.


### How to use it?

