import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import View from "../pages/view/Views";
import Home from "./../pages/home/Home";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/pastas",
				element: <View img={"pastas"} />,
				children: [
					{
						path: "/pastas/:pastasId",
					},
				],
			},
			{
				path: "/postres",
				element: <View img={"past"} />,
			},
			{
				path: "/churrasqueria",
				element: <View img={"p"} />,
			},
			{
				path: "/cafeteria",
				element: <View img={"pq"} />,
			},
			{
				path: "/saludable",
				element: <View img={"ps"} />,
			},
			{
				path: "/pizzas",
				element: <View img={"pa"} />,
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
