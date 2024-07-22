
import { Home, Car, User, Menu } from 'lucide-react';
import image1 from '../assets/logo.png';
// import AboutUsNav from './aboutusNavBar';
// import Footer from './footer';
const Navbar: React.FC = () => {
  return (
<div>
  
<nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={image1} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-white text-lg font-bold">Abdurahmans</span>
        </div>
        <div className="hidden md:flex space-x-4 ml-4">
          <a href="http://localhost:5173" className="text-gray-300 hover:text-white flex items-center">
            <Home className="mr-1" /> Home
          </a>
          <a href="http://localhost:5173/vehicles" className="text-gray-300 hover:text-white flex items-center">
            <Car className="mr-1" /> Vehicles
          </a>
          <a href="http://localhost:5173/aboutUS" className="text-gray-300 hover:text-white flex items-center">
            {/* <User className="mr-1" />  */}About Us
          </a>
          <a href="https://vehiclehiremanagement-system.onrender.com/contact" className="text-gray-300 hover:text-white flex items-center">
            <User className="mr-1" /> Contact us
          </a>
        </div>
        <div className="hidden md:flex space-x-4 ml-auto">
          <a href="http://localhost:5173/login" className="text-gray-300 hover:text-white">Login</a>
          <a href="http://localhost:5173/register" className="text-gray-300 hover:text-white">Signup</a>
        </div>
        <div className="md:hidden">
          <Menu className="text-white" />
        </div>
      </div>
    </nav>
</div>
  );
}

export default Navbar;
