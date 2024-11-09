import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../Pages/ErrorPage";
import CategoryCard from "../components/CategoryCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <CategoryCard />,
            loader: () => fetch('../coffees.json')
          },
          {
            path: '/category/:category',
            element: <CategoryCard />,
            loader: () => fetch('../coffees.json')
          },
        ]
      },
      {
        path: "/coffees",
        element: <Coffees />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
