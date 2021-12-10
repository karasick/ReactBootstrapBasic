import About from "../pages/About";
import Posts from "../pages/Posts/Posts";
import Post from "../pages/Posts/Post";
import Error from "../pages/Error";
import Login from "../pages/Auth/Login";

export const privateRoutes = [
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <Post/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},

    {path: '/about', element: <About/>, exact: true},

    {path: '/error', element: <Error/>, exact: true},
]