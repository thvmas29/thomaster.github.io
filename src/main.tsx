import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './styles/index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* On définit le chemin de base pour le routeur React */}
    <BrowserRouter basename="/thomaster.github.io">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
