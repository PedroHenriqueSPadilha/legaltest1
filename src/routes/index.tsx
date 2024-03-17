import { Home } from "../pages/home";
import { CartTShirt } from "../pages/shoppingCart";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/",
    element: <CartTShirt />,
  },
]);