import NotFound from "@/app/routes/not-found";
import Landing from "@/app/routes/landing";
import Ticket from "@/app/routes/ticket";
import { createBrowserRouter, RouterProvider } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={routes} />;
};
export default Router;
