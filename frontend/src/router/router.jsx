import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/home/Home";
import Pastas from "../pages/view/pastas/Pastas";

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
		path: "/checkout",
		element: <Checkout />,
	},
]);
