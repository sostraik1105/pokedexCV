import { createHashRouter } from 'react-router-dom';
import { Home, NotFound, PokeDetails, PokeList } from './pages';

import Layout from './pages/Layout';

const name = window.localStorage.getItem('name');

export const router = createHashRouter([
  {
    element: name ? <Layout /> : <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <PokeList />,
      },
      {
        path: '/:pokemon',
        element: <PokeDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
