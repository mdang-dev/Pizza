import { useState } from "react";


import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CreatePizzaPage from "./pages/CreatePizzaPage";
import DetailPizzaPage from "./pages/DetailPizzaPage";

function App() {

  const appRouters: RouteObject[] = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'create-pizza',
          element: <CreatePizzaPage />
        },
        {
          path: '/pizza/:id',
          element: <DetailPizzaPage />
        }
      ]
    }
  ];

  const router = createBrowserRouter([
    {
      element: (
        <Outlet />
      ),
      children: appRouters,
    }
  ]);

  return <RouterProvider router={router}/>
}

export default App;
