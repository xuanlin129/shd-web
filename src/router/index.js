import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Layout = React.lazy(() => import('../layouts/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
