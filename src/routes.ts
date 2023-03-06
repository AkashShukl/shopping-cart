import React from 'react';
import { lazyLoadRoutes } from './common/utili/lazyLoadRoutes';

const ProuctView = React.lazy(() => import('./component/ProductItem/ProductView'));
const Cart = React.lazy(()=>import('./component/Cart'));

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
  {
    path: "/cart",
    name : "Cart",
    exact: true,
    element: lazyLoadRoutes(Cart),
  },
]

export default routes;
