
// // // import { Home, Car, User, Menu } from 'lucide-react';
// // // import image1 from '../assets/logo.png';  // Replace with your logo path

// // // function Navbar() {
// // //   return (
// // //     <nav className="bg-gray-800 p-4">
// // //       <div className="container mx-auto flex justify-between items-center">
// // //         <div className="flex items-center">
// // //           <img src={image1} alt="Logo" className="h-10 w-10 mr-2" />
// // //           <span className="text-white text-lg font-bold">Abdurahmans</span>
// // //         </div>
// // //         <div className="hidden md:flex space-x-4">
// // //           <a href="#" className="text-gray-300 hover:text-white flex items-center">
// // //             <Home className="mr-1" /> Home
// // //           </a>
// // //           <a href="#" className="text-gray-300 hover:text-white flex items-center">
// // //             <Car className="mr-1" /> Vehicles
// // //           </a>
// // //           <a href="#" className="text-gray-300 hover:text-white flex items-center">
// // //             <User className="mr-1" /> About Us
// // //           </a>
// // //           <a href="#" className="text-gray-300 hover:text-white">Contact</a>
// // //         </div>
// // //         <div className="md:hidden">
// // //           <Menu className="text-white" />
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;
// // import { Home, Car, User, Menu } from 'lucide-react';
// // import image1 from '../assets/logo.png'; 

// // const Navbar: React.FC = () => {
// //   return (
// //     <nav className="bg-gray-800 p-4 ">
// //       <div className="container mx-auto flex-start m-5% justify-between items-center">
// //         <div className="flex items-center">
// //           <img src={image1} alt="Logo" className="h-10 w-10 mr-2" />
// //           <span className="text-white text-lg font-bold">Abdurahmans</span>
// //         </div>
// //         <div className="hidden md:flex space-x-4">
// //           <a href="#" className="text-gray-300 hover:text-white flex items-center">
// //             <Home className="mr-1" /> Home
// //           </a>
// //           <a href="#" className="text-gray-300 hover:text-white flex items-center">
// //             <Car className="mr-1" /> Vehicles
// //           </a>
// //           <a href="#" className="text-gray-300 hover:text-white flex items-center">
// //             <User className="mr-1" /> About Us
// //           </a>
// //           <a href="#" className="text-gray-300 hover:text-white">Contact</a>
// //         </div>
// //         <div className="md:hidden">
// //           <Menu className="text-white" />
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import { Home, Car, User, Menu } from 'lucide-react';
// import image1 from '../assets/logo.png';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <img src={image1} alt="Logo" className="h-10 w-10 mr-2" />
//           <span className="text-white text-lg font-bold">Abdurahmans</span>
//         </div>
//         <div className="hidden md:flex space-x-4 ml-auto">
//           <a href="#" className="text-gray-300 hover:text-white flex items-center">
//             <Home className="mr-1" /> Home
//           </a>
//           <a href="#" className="text-gray-300 hover:text-white flex items-center">
//             <Car className="mr-1" /> Vehicles
//           </a>
//           <a href="#" className="text-gray-300 hover:text-white flex items-center">
//             <User className="mr-1" /> About Us
//           </a>
//           <a href="#" className="text-gray-300 hover:text-white">Contact</a>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <a href="#" className="text-gray-300 hover:text-white">Login</a>
//           <a href="#" className="text-gray-300 hover:text-white">Signup</a>
//         </div>
//         <div className="md:hidden">
//           <Menu className="text-white" />
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Home, Car, User, Menu } from 'lucide-react';
import image1 from '../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={image1} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-white text-lg font-bold">Abdurahmans</span>
        </div>
        <div className="hidden md:flex space-x-4 ml-4">
          <a href="#" className="text-gray-300 hover:text-white flex items-center">
            <Home className="mr-1" /> Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center">
            <Car className="mr-1" /> Vehicles
          </a>
          <a href="#" className="text-gray-300 hover:text-white flex items-center">
            <User className="mr-1" /> About Us
          </a>
        </div>
        <div className="hidden md:flex space-x-4 ml-auto">
          <a href="#" className="text-gray-300 hover:text-white">Login</a>
          <a href="#" className="text-gray-300 hover:text-white">Signup</a>
        </div>
        <div className="md:hidden">
          <Menu className="text-white" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
