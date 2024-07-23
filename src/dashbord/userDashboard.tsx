import React from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from "../features/userSlice";
import { toast } from "sonner";
import Footer from './userdashbord/footer';
import UserNavbar from './userNavebar';
const UserDashboardLayout: React.FC = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const handleLogout = () => {
      
      dispatch(clearUser());
      localStorage.removeItem('token');
      toast.success('Logged out successfully!');
  
      setTimeout(() => {
         navigate('/login');
      }, 2000); 
    };
    
  return (
    <div className='h-screen flex flex-col'>
        <UserNavbar/>
        <div className="flex h-screen bg-white">
      <nav className="w-64 bg-blue-600 shadow-md h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
        </div>
        <ul className="space-y-2">
          <li>
            <Link to="/user" className="block py-2 px-4 font-bold text-black hover:bg-gray-200">Profile Details</Link>
          </li>
          <li>
            <Link to="/user/about" className="block py-2 font-bold px-4 text-black hover:bg-gray-200">About Us</Link>
          </li>
          <li>
            <Link to="/user/vehicles" className="block py-2 px-4 font-bold text-black hover:bg-gray-200 ">Vehicles</Link>
            
          </li>
          <li>
            <Link to="/user/vehicleTable" className="block py-2 px-4 font-bold text-black hover:bg-gray-200 ">Fleet Table</Link>
            
          </li>
          <li>
            <Link to="/user/customer" className="block py-2 px-4 font-bold text-black hover:bg-gray-200 " >Sent Feedback</Link>
            
          </li>
          <li>
            <Link to="/login" className="block py-2 px-4 font-bold text-black hover:bg-gray-200 " onClick={handleLogout}>Log out</Link>
            
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
    <Footer/>
    </div>
  );
};

export default UserDashboardLayout;
