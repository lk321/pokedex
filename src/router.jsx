import { useRoutes } from 'react-router-dom';

import HomePage from 'pages/Home';

const Router = () => useRoutes([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
]);

export default Router;
