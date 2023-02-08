import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import Home from "./../pages/home/Home";
import Pastas from "./../pages/view/pastas/Pastas";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/pastas",
				element: <Pastas />,
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
