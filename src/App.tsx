

import Userdashbord from './dashbord/userdashbord/userdashbord'
import Home from './pages/home'
import Register from './pages/register'
import  Contact  from './pages/contact'
import Error from './pages/error'
import User from './dashbord/user'
import Vehicles from './components/vehicles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login  from './pages/login'
import About from './components/about us'
import UserTable from './dashbord/usertable'
import { Profile } from './dashbord/profile'
import VehicleList from './dashbord/vehicledisplay'
import BookingTable from './dashbord/booking'
import Fleets from './fleet/add'
import VehicleTable from './vehicleManagement/vehicleTable'
import Vehicle from './components/vehicles'
import CustomerSupportForm from './customer/customer'
import CustomerSupportTable from './customer/feedbackTable'
import DashboardLayout from './dashbord/adminDashbord'
import AboutUsNav from './components/aboutusNavBar'


function App() {
 
  const router = createBrowserRouter([
    { path: '/', element: <Home/>,
      errorElement:<Error/>,
     },
     { path: '/aboutUS', element: <AboutUsNav/>,
      errorElement:<Error/>,
     },
     
    
     { path: '/vehicles', element: <Vehicle/>,
      errorElement:<Error/>,
     },
     { path: '/register', element: <Register/>,
      errorElement:<Error/>,
     },
     { path: '/about', element: <About/>,
      errorElement:<Error/>,
     },
     { path: 'https://car-hire-frontend-two.vercel.app/contact', element: <Contact/>,
      errorElement:<Error/>,
     },
     { path: '/userdashbord', element: <Userdashbord/>,
      errorElement:<Error/>,
     },
     {
       path: '/login', element:<Login/>,
       errorElement:<Error/>
     },
  
     {
      path:'/admin',
      element:<DashboardLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:'/admin',element:<Profile/>,
        },
        {
          path:'/admin/users',element:<UserTable/>
        },
        {
          path: '/admin/booking', element:<BookingTable/>,
        },
        {
          path: '/admin/feedback', element:<CustomerSupportTable/>,
        },
        {
          path: '/admin/usertable', element:<UserTable/>,
        },
        {
          path: '/admin/fleet', element:<Fleets/>,
        },


      ]
     },
     {
      path: '/user', element:<User/>,
      errorElement:<Error/>,
      children:[
      {
        path: 'https://vehiclehiremanagement-system.onrender.com/user/contact', element:<Contact/>,
      }, {
        path: '/user/', element:<Profile/>,
      },
     
      {
        path: '/user/vehicles', element:<VehicleList/>,
      },
      {
        path: '/user/vehicleTable', element:<VehicleTable/>,
      },
     
      {
        path: '/user/profile', element:<Profile/>,
      },
   
      {
        path: '/user/register', element:<Register/>,
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