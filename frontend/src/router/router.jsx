import { createBrowserRouter } from "react-router-dom";
import { Modal } from "../components";
import Checkout from "../pages/Checkout/Checkout";
import RootLayout from "../pages/RootLayout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import Category from "../pages/view/categoria/category";
import Home from "./../pages/home/Home";

import Categorias from "../pages/home/components/Categories";
import Contact from "../pages/home/components/Contact";
import MyAccount from "../pages/home/components/MyAccount";
import Promotions from "../pages/home/components/Promotions";

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
				path: "categoria/:idCategory",
				element: <Category />,
				children: [
					{
						path: "/categoria/:idCategory/:idFood",
						element: <Modal />,
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
