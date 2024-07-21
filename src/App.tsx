

import Userdashbord from './dashbord/userdashbord/userdashbord'
import Home from './pages/home'
import Register from './pages/register'
import  Contact  from './pages/contact'
import Error from './pages/error'
//import Aboutus from './pages/about'
//import Dashboard from './pages/Dashboard'
import User from './dashbord/user'
import Vehicles from './components/vehicles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login  from './pages/login'
import About from './components/about us'
//import Profile from './Features/UserProfile/Profile'
import UserTable from './dashbord/usertable'
import { Profile } from './dashbord/profile'
import VehicleList from './dashbord/vehicledisplay'
import BookingTable from './dashbord/booking'
import Fleets from './fleet/add'
import Vehicle from './components/vehicles'
import CustomerSupportForm from './customer/customer'
import CustomerSupportTable from './customer/feedbackTable'
function App() {
 
  const router = createBrowserRouter([
    { path: '/', element: <Home/>,
      errorElement:<Error/>,
     },
     { path: '/books', element: <BookingTable/>,
      errorElement:<Error/>,
     },
    
     { path: '/vehicles', element: <Vehicle/>,
      errorElement:<Error/>,
     },
     { path: '/register', element: <Register/>,
      errorElement:<Error/>,
     },
    //  { path: '/vehicles', element: <Vehicles/>,
    //   errorElement:<Error/>,
    //  },
     { path: '/about', element: <About/>,
      errorElement:<Error/>,
     },
     { path: '/contact', element: <Contact/>,
      errorElement:<Error/>,
     },
     { path: '/userdashbord', element: <Userdashbord/>,
      errorElement:<Error/>,
     },
    //  {
    //   path: '/about',element:<About/>,
    //   errorElement:<Error/>
    //  },
     {
       path: '/login', element:<Login/>,
       errorElement:<Error/>
     },
     {
      path: '/user', element:<User/>,
      errorElement:<Error/>,
      children:[
      // {
      //   path: '/dashboard/about', element:<About/>,
      // },
      {
        path: '/user/contact', element:<Contact/>,
      }, {
        path: '/user/', element:<Profile/>,
      },
      {
        path: '/user/feedback', element:<CustomerSupportTable/>,
      },
      {
        path: '/user/vehicles', element:<VehicleList/>,
      },
      {
        path: '/user/fleet', element:<Fleets/>,
      },
      {
        path: '/user/profile', element:<Profile/>,
      },
      {
        path: '/user/booking', element:<BookingTable/>,
      },
      {
        path: '/user/register', element:<Register/>,
      },
      {
        path: '/user/table', element:<UserTable/>,
      },
      {
        path: '/user/customer', element:<CustomerSupportForm/>,
      },
      {
        path: '/user/login', element:<Login/>,
      },
      {
        path: '/user/about', element:<About/>,
      },

    ]
    },
    {
      path: '/vehicle', element:<Vehicles/>,
      errorElement:<Error/>
    },
  
     
     
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App