import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './ErrorBoundry.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback="There was an error">
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
