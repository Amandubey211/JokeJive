import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";

import ErrorPage from "./ErrorPage";
import MemePage from "./MemePage";
import JokeSetting from "./JokeSetting";
const Body = () => {
  const About = lazy(() => import("./About"));
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
      element: (
        <Suspense fallback={<span> please wait..</span>}>
          <About />
        </Suspense>
      ),
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
