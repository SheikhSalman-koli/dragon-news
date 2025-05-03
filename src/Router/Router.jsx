import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Homepage from "../pages/Homepage";
// import Categories from "../Componants/Categories";
import CatagoryNews from "../pages/CatagoryNews";
import Layout from "../pages/AuthLayout/Layout";
import Login from "../Componants/Sign/Login";
import Register from "../Componants/Sign/Register";
import Details from "../pages/Details";
import Privet from "../pages/Privet";
import Loader from "../Componants/Loader";



const Router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: '/category/:id',
                Component: CatagoryNews,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: Loader
            }
        ]
    },
    {
        path: '/auth',
        Component: Layout,
        children: [
            {
                // index: true,
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/news/:id',
        element: <Privet>
            <Details></Details>
        </Privet>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: Loader
    },
    {
        path: '/*',
        element: <div>erroe 404</div>
    },
])

export default Router;