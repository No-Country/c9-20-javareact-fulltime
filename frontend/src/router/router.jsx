import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import View from "../pages/view/Views";
import Home from "./../pages/home/Home";

import MyAccount from "../pages/home/components/MyAccount"
import Promotions from "../pages/home/components/Promotions";
import Contact from "../pages/home/components/Contact"
import Categorias from "../pages/home/components/Categories";

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
				children: [
					{
						path: "/category",
						element: <Categorias />,
					},
					{
						path: "/category/:idCategory",
						element: <View />,
					},
					{
						path: "/promotions",
						element: <Promotions />,
					},
					{
						path: "/contact",
						element: <Contact />,
					},
				],
			},

			{
				path: "/signup",
				element: <Signup />,
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
				path: "/checkout",
				element: <Checkout />,
			},
		],
	},

]);
