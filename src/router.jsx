import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Test from './pages/Test/Test';

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
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
]);
