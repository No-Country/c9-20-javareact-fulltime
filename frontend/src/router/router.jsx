import { createBrowserRouter } from "react-router-dom";
import { Modal } from "../components";
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
				path: "/:idCategory",
				element: <View />,
				children: [
					{
						path: "/:idCategory/:idItem",
						element: <Modal />,
					},
				],
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
