import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './components/global.style';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  </QueryClientProvider>,
);
