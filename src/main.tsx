import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes' // On importe ton router
import './styles/index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* On passe le router que tu as créé au Provider */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
