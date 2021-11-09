import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/Global.scss'
import reportWebVitals from './utils/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
