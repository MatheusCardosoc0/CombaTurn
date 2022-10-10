import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UseContextProvider, UserContext } from './context/UseContext'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UseContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UseContextProvider>
)
