import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes' 
import './styles/index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* RouterProvider doit être SEUL ici, car 'router' contient déjà la logique */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
