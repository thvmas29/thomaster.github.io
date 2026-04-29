import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/App' // On importe la constante router de App.tsx
import './styles/index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* C'est ce composant SEUL qui gère tout. Il ne faut rien d'autre. */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
