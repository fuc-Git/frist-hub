import Home from "../oneRouter/home"
import Install from "../oneRouter/install"
import It from "../oneRouter/it"
import Vip from "../oneRouter/vip"
import { Navigate } from "react-router-dom"
import Ai from "../twoRouters/Ai"
import Java from "../twoRouters/java"
import Web from "../twoRouters/web"
import Ios from "../twoRouters/ios"
import Andriod from "../twoRouters/andriod"
import Mysql from "../twoRouters/mysql"
import Reduce from "../twoRouters/reduce"
import Login from "../oneRouter/login"
import Talk from "../talk"
const route = [
    {
        path: '/',
        element: <Navigate to="Home" />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/install',
        element: <Install />
    },
    {
        path: '/it',
        element: <It />,
        children: [
            {
                path: '/it/ai',
                element: <Ai />
            },
            {
                path: '/it',
                element: <Navigate to="/it/java" />
            },
            {
                path: '/it/java',
                element: <Java />
            }, {
                path: '/it/web',
                element: <Web />
            }, {
                path: '/it/ios',
                element: <Ios />
            }, {
                path: '/it/andriod',
                element: <Andriod />
            }, {
                path: '/it/mysql',
                element: <Mysql />
            }, {
                path: '/it/Reduce',
                element: <Reduce />
            },
        ]
    },
    {
        path: '/vip',
        element: <Vip />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/talk',
        element: <Talk />
    }
]
export default route