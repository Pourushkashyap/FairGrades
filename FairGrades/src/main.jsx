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
