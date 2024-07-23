
import { Link, Outlet,useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from "../features/userSlice";
import { Toaster, toast } from "sonner";
// import logout from '../assets/logout.jpg'
export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleLogout = () => {
    
    dispatch(clearUser());
    localStorage.removeItem('token');

    toast.success('Logged out successfully!');

    setTimeout(() => {
      navigate('/login');
    }, 2000); 
  };

  return (
    <div className="flex flex-col h-screen">
      <Toaster />
      <div className="flex flex-grow">
        <div className="flex flex-col w-64 bg-indigo-800 fixed top-16 bottom-0">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              <p className="group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md">Dashboard</p>
              <Link
                to="/user/"
                className="group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-600"
              >
                Profile
              </Link>
              
              <Link
                to="/user/vehicles"
                className="group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-600"
              >
                Vehicles
              </Link>
              <Link
                to="/user/vehicleTable"
                className="group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-600"
              >
                VehicleTable
              </Link>
              <Link
                to="/user/about"
                className="group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-600"
              >
                About Us
              </Link>
              <Link
                to="/user/customer"
                className="group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-600"
                
              >
                Support
              </Link>
              <Link
                to="/login"
                className="group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md hover:bg-indigo-600"
                onClick={handleLogout}
              >
                Log out
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex-grow ml-64 mt-16 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
