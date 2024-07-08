import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Register from './pages/register'
import Login from './pages/login'
import Contact from './pages/contact'
import Home from './pages/home'
import About from './pages/about'
import Error from './pages/error'
function App() {
const router=createBrowserRouter([
{
  path:'/',
  element:<Home/>,
  errorElement:<Error/>
},
{
  path:'/about',
  element:<About/>,
  errorElement:<Error/>
},
{
  path:'/contact',
  element:<Contact/>,
  errorElement:<Error/>
},
{
  path:'/login',
  element:<Login/>,
  errorElement:<Error/>
},
{
  path:'/register',
  element:<Register/>,
  errorElement:<Error/>
}
])
return(<RouterProvider router={router}/>)
}

export default App
