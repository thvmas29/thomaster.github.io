import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes' 
import './styles/index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* RouterProvider est le seul composant nécessaire ici */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
