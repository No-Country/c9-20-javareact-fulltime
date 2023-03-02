import { createHashRouter } from "react-router-dom";
import Loader from "../components/Loader";
import AdminCreate from "../pages/Admin/AdminCreate.jsx";
import Checkout from "../pages/Checkout/Checkout";
import Thanks from "../pages/Checkout/Thanks";
import MyAccount from "../pages/home/components/MyAccount/MyAccount";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ItemsCategory from "../pages/view/categoria/components/ItemsCategory";
import Contact from "../pages/view/contacto/Contact";
import Promotions from "../pages/view/promociones/Promotions";
import ViewOfThePlate from "../pages/view/viewoftheplate/ViewOfThePlate";
import Home from "./../pages/home/Home";
import Category from "./../pages/view/categoria/Category";
export const router = createHashRouter([
	{
		path: "/",
		element: <Home />,
	},
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
		path: "/promociones",
		element: <Promotions />,
	},
	{
		path: "/contacto",
		element: <Contact />,
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
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/checkout",
		element: <Checkout />,
	},
	{
		path: "/thanks",
		element: <Thanks />,
	},
	{
		path: "/loading",
		element: <Loader />,
	},
	{
		path: "/adminCreate",
		element: <AdminCreate />,
	},
]);
