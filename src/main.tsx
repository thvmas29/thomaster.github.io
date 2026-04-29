import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'
import './styles/index.css' // Ajuste le chemin si ton CSS est ailleurs

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Le basename est la clé pour corriger l'erreur 404 sur GitHub Pages */}
    <BrowserRouter basename="/thomaster.github.io">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
