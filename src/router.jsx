import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Test from './pages/Test/Test';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/test',
    element: <Test />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard/>,
      },
      {
        path: '/profile',
        element: <Profile/>,
      }
    ],
  },
]);
