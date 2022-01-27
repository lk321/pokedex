import { useRoutes } from 'react-router-dom';

import HomePage from 'pages/Home';
import PokemonDetails from 'components/PokemonDetails';

const Router = () => useRoutes([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetails />,
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
]);

export default Router;
