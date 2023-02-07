import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Checkout from "../pages/Checkout/Checkout"
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
]);
