import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Applied from './components/Applied/Applied.jsx'
import Errorpage from './components/ErrorPage/Errorpage.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path : '/',
        element: <Home></Home>
      },
      {
        path : '/applied',
        element: <Applied></Applied>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
