import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import MyAccount from "../pages/home/components/MyAccount";
import Home from "./../pages/home/Home";
import Contact from "./../pages/home/components/Contact";
import Promotions from "./../pages/home/components/Promotions";
import Category from "./../pages/view/categoria/Category";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/carta",
		element: <Category />,
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
