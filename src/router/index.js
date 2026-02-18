import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Helmet from '../components/Helmet';

const Layout = React.lazy(() => import('../layouts/Layout'));
const Home = React.lazy(() => import('../pages/Home'));
const Service = React.lazy(() => import('../pages/Service'));
const About = React.lazy(() => import('../pages/About'));
const Process = React.lazy(() => import('../pages/Process'));
const Faq = React.lazy(() => import('../pages/Faq'));
const Contact = React.lazy(() => import('../pages/Contact'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, title: '首頁' },
      { path: 'service', element: <Service />, title: '服務項目' },
      { path: 'about', element: <About />, title: '關於興樺德' },
      { path: 'process', element: <Process />, title: '產品製程' },
      { path: 'faq', element: <Faq />, title: '常見問題' },
      { path: 'contact', element: <Contact />, title: '聯絡我們' },
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
