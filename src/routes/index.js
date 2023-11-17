import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../Home";
import Layout from "../Layout";
import Signup from "../pages/signUp/signUp";
import Signin from "../pages/signIn/signIn";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
        ],
    },
]);