import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import { Modal } from "../components";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";

import Home from "./../pages/home/Home";
import View from "../pages/view/views";
import MyAccount from "../pages/home/components/MyAccount"
import Promotions from "../pages/home/components/Promotions";
import Contact from "../pages/home/components/Contact"
import Category from "../pages/view/categoria/Category";

export const router = createBrowserRouter([
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
				children: [
					{
						path: "/categoria",
						element: <Category />,
					},
					{
						path: "/categoria/:idCategory",
						element: <Category />,
						children: [
							{
								path: "/categoria/:idCategory/:idFood",
								element: <Modal />,

							},
						],
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
