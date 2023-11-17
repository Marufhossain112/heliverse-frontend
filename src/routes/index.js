import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../Home";
import Layout from "../Layout";
import Signup from "../pages/signUp/SignUp";
import Signin from "../pages/signIn/SignIn";
import Create from "../pages/create/Create";
import PostCard from "../pages/card/Card";
import CardDetail from "../pages/card/CardDetail";
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
            {
                path: "/create",
                element: <Create />,
            },
            {
                path: "/card",
                element: <PostCard />
            },
            {
                path: "/cardDetails/:id",
                element: <CardDetail />
            },
        ],
    },
]);