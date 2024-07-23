import React from 'react';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from "../features/userSlice";
import { toast } from "sonner";
import Footer from './userdashbord/footer';
import AdminNavbar from '../components/adminNavbar';
const DashboardLayout: React.FC = () => {
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
        <AdminNavbar/>
        <div className="flex h-screen bg-white">
      <nav className="w-64 bg-blue-300 shadow-md h-full">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
        </div>
        <ul className="space-y-2">
          <li>
            <Link to="/admin" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">Profile Details</Link>
          </li>
          <li>
            <Link to="/admin/users" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">User Management</Link>
          </li>
          <li>
            <Link to="/admin/booking" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 ">Bookings</Link>
            
          </li>
          <li>
            <Link to="/admin/fleet" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 ">Fleet</Link>
            
          </li>
          <li>
            <Link to="/admin/feedback" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 " >User Feedbacks</Link>
            
          </li>
          <li>
            <Link to="/login" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 " onClick={handleLogout}>Log out</Link>
            
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

export default DashboardLayout;
