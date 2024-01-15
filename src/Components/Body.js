import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import About from "./About";
import ErrorPage from "./ErrorPage";
import MemePage from "./MemePage";
import JokeSetting from "./JokeSetting";

const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/jokepage",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/form",
      element: <JokeSetting />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/memepage",
      element: <MemePage />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
