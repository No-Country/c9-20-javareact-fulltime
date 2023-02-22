import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import MyAccount from "../pages/home/components/MyAccount/MyAccount";
import ItemsCategory from "../pages/view/categoria/components/ItemsCategory";
import Promotions from "../pages/view/promociones/Promotions";
import ViewOfThePlate from "../pages/view/viewoftheplate/ViewOfThePlate";
import Home from "./../pages/home/Home";
import Category from "./../pages/view/categoria/Category";
import Thanks from "../pages/Checkout/Thanks";
import AdminCreate from "../pages/Admin/AdminCreate";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categoria",
    element: <Category />,
    children: [
      {
        path: "/categoria/:idCategory",
        element: <ItemsCategory />,
        children: [
          {
            path: "/categoria/:idCategory/:idFood",
            element: <ViewOfThePlate />,
          },
        ],
      },
    ],
  },

  {
    path: "/promociones",
    element: <Promotions />,
  },
  {
    path: "/contacto",
    element: <>hola</>,
  },
  {
    path: "/myaccount",
    element: <MyAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
  {
    path: "/adminCreate",
    element: <AdminCreate />,
  },
]);
