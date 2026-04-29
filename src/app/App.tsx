import { useRoutes } from 'react-router-dom'
// Importe tes routes depuis ton fichier routes.ts
import { routes } from './routes' 

function App() {
  // Cette fonction va charger la bonne page en fonction de l'URL
  const element = useRoutes(routes)

  return (
    <div className="app-container">
      {element}
    </div>
  )
}

export default App
