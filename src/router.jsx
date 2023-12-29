import React, { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
