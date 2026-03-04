import { createBrowserRouter } from 'react-router'
import Login from '../Features/Auth/Pages/Login'
import Register from '../Features/Auth/Pages/Register'
import Protected from '../Features/Auth/Components/Protected'
import Home from '../Features/Home/Pages/Home'

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Protected><Home /></Protected>
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default appRoutes