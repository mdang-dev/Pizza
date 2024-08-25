import React, { Suspense, useState } from "react";



import HomePage from "./pages/HomePage";
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
const DetailPizzaPage = React.lazy(() => import("./pages/DetailPizzaPage"));
const CreatePizzaPage = React.lazy(() => import("./pages/CreatePizzaPage"));

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



function App() {

  return (<Suspense>
    <RouterProvider router={router}/>
  </Suspense>);
  
}



export default App;
