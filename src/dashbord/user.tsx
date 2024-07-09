
import image1 from '../assets/logout.jpg';
import image2 from '../assets/settings.png';
import './user.scss';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="flex items-center justify-center mt-8">
        <span className="text-white text-2xl font-semibold">Sidebar</span>
      </div>
      <nav className="mt-10">
        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">Dashboard</a>
        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">Book a vehicle</a>
        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">Booked Vehicles</a>
        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">My Ticket</a>
        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700">New Ticket</a>
        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 flex items-center">
          <img src={image2} alt="Settings" className="mr-2" width="20" height="20" />
          Settings
        </a>
        <a href="#" className="block py-2 px-4 text-gray-200 hover:bg-gray-700 flex items-center">
          <img src={image1} alt="Logout" className="mr-2" width="20" height="20" />
          Logout
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

