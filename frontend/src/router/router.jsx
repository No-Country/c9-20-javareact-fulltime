import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import MyAccount from "../pages/home/components/MyAccount";
import ItemsCategory from "../pages/view/categoria/components/ItemsCategory";
import ViewOfThePlate from "../pages/view/viewoftheplate/ViewOfThePlate";
import Home from "./../pages/home/Home";
import Contact from "./../pages/home/components/Contact";

import Promotions from "../pages/view/promociones/Promotions";
import Category from "./../pages/view/categoria/Category";

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
		element: <Contact />,
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
]);
