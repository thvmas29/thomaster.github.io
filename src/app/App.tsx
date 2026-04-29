import { useRoutes } from 'react-router-dom';
import * as RouteModule from './routes'; 

function App() {
  // Cette ligne est magique : elle récupère les routes peu importe comment Figma les a exportées
  const routesToUse = (RouteModule as any).routes || (RouteModule as any).default || [];
  const element = useRoutes(routesToUse);

  return (
    <>
      {element}
    </>
  );
}

export default App;
