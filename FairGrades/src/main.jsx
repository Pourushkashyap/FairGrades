import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Dashboard from './Pages/Dashboard.jsx'
import Help from './Pages/Help.jsx'
import Requests from './Pages/Requests.jsx'
import Home from './Pages/Home.jsx'
import History from './Pages/History.jsx' 
import Profile from './Pages/Profile.jsx'
import Notification from './Pages/Notification.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/requests',
        element: <Requests />,
      },
      {
        path: '/history',
        element: <History />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path:'/profile',
        element:<Profile/>
      },
       {
        path:"/notification",
        element:<Notification/>
       }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

    {/* </RouterProvider> */}
  </StrictMode>,
)
