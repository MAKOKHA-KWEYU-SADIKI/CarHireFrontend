
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const AdminNavbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      console.log('Dark mode enabled');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Dark mode disabled');
    }
    console.log('darkMode value:', darkMode);
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  const handleDeleteAccount = () => {
    // Add your account deletion logic here
    toast.success('Account deleted successfully');
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/admin" className="text-white text-lg font-semibold">Admin Dashboard</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button 
            onClick={handleDeleteAccount}
            className="text-white bg-red-600 hover:bg-red-500 p-2 rounded"
          >
            Delete Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
