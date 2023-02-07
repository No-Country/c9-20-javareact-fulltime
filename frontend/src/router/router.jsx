import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/login/Login";
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
