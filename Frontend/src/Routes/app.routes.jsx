import { createBrowserRouter } from 'react-router'
import Login from '../Features/Auth/Pages/Login'
import Register from '../Features/Auth/Pages/Register'

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hello</h1>
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