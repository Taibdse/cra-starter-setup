import DashboardLayout from "layouts/DashboardLayout";
import ItemPage from "pages/Item";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <div>hello</div>
      },
      {
        path: '/item',
        element: <ItemPage />
      }
    ]
  },
]);
