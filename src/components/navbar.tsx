
// import { Home, Car, User, Menu } from 'lucide-react';
// import image1 from '../assets/logo.png';
// import { Link, Outlet } from "react-router-dom";
// const Navbar: React.FC = () => {
//   return (
// <div>
  
// <nav className="bg-blue-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={image1} alt="Logo" className="h-10 w-10 mr-2" />
//           <span className="text-white text-lg font-bold">Abdurahmans</span>
//         </div>
//         <div className="hidden md:flex space-x-4 ml-4">
//           <a href="/" className="text-gray-300 hover:text-white flex items-center">
//             <Home className="mr-1" /> Home
//           </a>
//           <a href="/vehicles" className="text-gray-300 hover:text-white flex items-center">
//             <Car className="mr-1" /> Vehicles
//           </a>
//           <a href="/aboutUS" className="text-gray-300 hover:text-white flex items-center">
//             {/* <User className="mr-1" />  */}About Us
//           </a>
//           <a href="/contact" className="text-gray-300 hover:text-white flex items-center">
//             <User className="mr-1" /> Contact us
//           </a>
//         </div>
//         <div className="hidden md:flex space-x-4 ml-auto">
//           <a href="/login" className="text-gray-300 hover:text-white">Login</a>
//           <a href="/register" className="text-gray-300 hover:text-white">Signup</a>
//         </div>
//         <div className="md:hidden">
//           <Menu className="text-white" />
//         </div>
//       </div>
//     </nav>
// </div>
//   );
// }

// export default Navbar;
import { Home, Car, User, Menu } from 'lucide-react';
import image1 from '../assets/logo.png';
import { Link, Outlet } from "react-router-dom";

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
            <Link to="/" className="text-gray-300 hover:text-white flex items-center">
              <Home className="mr-1" /> Home
            </Link>
            <Link to="/vehicles" className="text-gray-300 hover:text-white flex items-center">
              <Car className="mr-1" /> Vehicles
            </Link>
            <Link to="/aboutUS" className="text-gray-300 hover:text-white flex items-center">
              {/* <User className="mr-1" />  */}About Us
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white flex items-center">
              <User className="mr-1" /> Contact us
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 ml-auto">
            <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
            <Link to="/register" className="text-gray-300 hover:text-white">Signup</Link>
          </div>
          <div className="md:hidden">
            <Menu className="text-white" />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
