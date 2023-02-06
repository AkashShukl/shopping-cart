import React from 'react'
import Home from './component/Home'
import './index.css'
import { Routes, Route, Link, useRoutes } from 'react-router-dom'
import ProductList from './component/ProductList'
import allRoutes from './routes'
import Nav from './component/customNavBar/Nav'

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/signup', element: <ProductList /> },
    ...allRoutes,
  ])
  return routes
}

export default function App() {
  return (
    <>
      <Nav />
      <AppRoutes />
    </>
  )
}
