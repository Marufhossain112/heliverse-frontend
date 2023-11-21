import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Home";
import Layout from "../Layout";
import { TeamDetails } from "../components/Team/TeamDetails";

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
                path: "/team-details",
                element: <TeamDetails />,
            },
        ],
    },
]);