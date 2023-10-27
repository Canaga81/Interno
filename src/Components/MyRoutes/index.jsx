import Blog from "../../Pages/Blog";
import Contack from "../../Pages/Contack";
import ErrorPage from "../../Pages/Error";
import HomePage from "../../Pages/HomePage";
import Project from "../../Pages/Project";
import Services from "../../Pages/Services";

export const myRoutes = [
    
    {
        id: 1,
        path: '/',
        element: <HomePage />,
        title:'Home'
    },
    {
        id: 2,
        path: '/services',
        element: <Services />,
        title:'Services'  
    },
    {
        id: 3,
        path: '/project',
        element: <Project />,
        title:'Project'  
    },
    {
        id: 4,
        path: '/blog',
        element: <Blog />,
        title:'Blog'  
    },
    {
        id: 5,
        path: '/contack',
        element: <Contack />,
        title:'Contack'  
    },
    {
        id: 6,
        path: '*',
        element: <ErrorPage />, 
    },

];