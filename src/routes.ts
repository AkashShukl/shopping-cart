import React from 'react';
import { lazyLoadRoutes } from './common/utili/lazyLoadRoutes';

const ProuctView = React.lazy(() => import('./component/ProductItem/ProductView'));


  /*

  onst routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  {
    path: '/products',
    element: <ProductList />,
    children: [
      { path: '/', element: <ProductList /> },
      { path: ':id', element: <ProductDetail /> },
    ],
  },
];

*/

const routes : any = [
  {
    path: "/product/:id",
    name : "ProductView",
    exact: true,
    element: lazyLoadRoutes(ProuctView),
   
  },
]

export default routes;
