import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Helmet from '../components/Helmet';

const Layout = React.lazy(() => import('../layouts/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, title: '首頁' },
      { path: 'about', element: <About />, title: '關於' },
      { path: 'contact', element: <Contact />, title: '聯絡' },
    ],
  },
];

function applyHelmetToRoutes(routes) {
  return routes.map((route) => {
    const { children, title, element, ...rest } = route;
    const newRoute = { ...rest };

    if (element) {
      newRoute.element = title ? <Helmet title={title}>{element}</Helmet> : element;
    }

    if (children) {
      newRoute.children = applyHelmetToRoutes(children);
    }

    return newRoute;
  });
}

const router = createBrowserRouter(applyHelmetToRoutes(routes));

export default router;
