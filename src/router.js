import DashboardLayout from "layouts/DashboardLayout";
import HomePage from "pages/home";
import PageA from "pages/PageA";
import PageB from "pages/PageB";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/a',
        element: <PageA />
      },
      {
        path: '/b',
        element: <PageB />
      }
    ]
  },
]);
