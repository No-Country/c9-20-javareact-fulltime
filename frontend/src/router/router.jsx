import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
import Home from "../pages/home/Home";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);
