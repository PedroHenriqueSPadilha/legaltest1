import { Home } from "../pages/home";
import { CartShopping } from "../pages/shoppingCart";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/carrinho",
    element: <CartShopping />,
  },
]);
