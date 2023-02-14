import { createBrowserRouter } from "react-router-dom";
import { Modal } from "../components";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import Category from "../pages/view/categoria/category";
import Home from "./../pages/home/Home";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
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
		path: "/login",
		element: <Login />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
]);
