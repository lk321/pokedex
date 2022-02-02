import { useRoutes } from 'react-router-dom';

import Layout from 'components/Layout';
import PokedexPage from 'pages/Pokedex';
import PokemonPage from 'pages/Pokemon';
import NotFound from 'pages/NotFound';

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
    element: <NotFound />,
  },
]);

export default Router;
