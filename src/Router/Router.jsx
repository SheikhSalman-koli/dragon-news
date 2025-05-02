import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Homepage from "../pages/Homepage";
// import Categories from "../Componants/Categories";
import CatagoryNews from "../pages/CatagoryNews";



const Router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
               index : true , 
                Component: Homepage
            },
            {
                path: '/category/:id',
                Component: CatagoryNews,
                loader: ()=> fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element : <div>this is authentication</div>
    },
    {
        path: '/news',
        element : <div>this is news</div>
    },
    {
        path: '/*',
        element : <div>erroe 404</div>
    },
])

export default Router;