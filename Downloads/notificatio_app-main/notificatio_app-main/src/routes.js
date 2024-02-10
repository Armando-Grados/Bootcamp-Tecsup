import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import Notification from "./pages/notifications";
import Design from "./pages/Design";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Notification />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
