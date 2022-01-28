import { useRoutes } from 'react-router-dom';

import Layout from 'components/Layout';
import PokedexPage from 'pages/Pokedex';
import PokemonPage from 'pages/Pokemon';

const Router = () => useRoutes([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <PokedexPage /> },
      { path: '/pokemon/:id', element: <PokemonPage /> },
    ],
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
]);

export default Router;
