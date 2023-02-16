import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import RootLayout from "../pages/RootLayout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import Contact from "../pages/home/components/Contact";
import MyAccount from "../pages/home/components/MyAccount";
import Promotions from "../pages/home/components/Promotions";
import Category from "../pages/view/categoria/Category";
import ItemsCategory from "../pages/view/categoria/components/ItemsCategory";
import ViewOfThePlate from "../pages/view/viewoftheplate/ViewOfThePlate";
import Home from "./../pages/home/Home";
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
