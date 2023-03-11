import {createBrowserRouter, Navigate} from 'react-router-dom'
import Authorised from './guestandauth/Authorised'
import Guest from './guestandauth/Guest'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Surveys from './pages/Surveys'
import SurveyView from './pages/SurveyView'

const router= createBrowserRouter([
   
   {
    path:'/',
    element:<Authorised/>,
    children:[
        {
            path:'/',
            element:<Navigate to="/home" />
        },
        {
            path:'/home',
            element: <Home/>
        },
        {
            path:'/surveys',
            element: <Surveys/>
        },
        {
            path:'/surveys/create',
            element: <SurveyView/>
        },
    ]
   },
    {
        path:'/',
        element:<Guest/>,
        children:[
            {
                path:'login',
                element: <Login/>
            },
            {
                path:'register',
                element: <Register/>
            },
        ]
    }
])

export default router