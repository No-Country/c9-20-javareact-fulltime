import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import View from "../pages/view/views";
import Home from "./../pages/home/Home";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/view",
				element: <View />,
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
