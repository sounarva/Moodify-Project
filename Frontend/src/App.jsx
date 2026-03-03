import React from 'react'
import { RouterProvider } from 'react-router'
import appRoutes from './Routes/app.routes'
import '../Shared/global.scss'

const App = () => {
  return (
    <RouterProvider router={appRoutes} />
  ) 
}

export default App