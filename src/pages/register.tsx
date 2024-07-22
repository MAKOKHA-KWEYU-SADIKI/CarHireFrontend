import  { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    contact_phone: '',
    adress: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://vehiclehiremanagement-system.onrender.com/register', formData);
      console.log('Registration successful:', response.data);
      toast.success('User created successfully!', {
        style: {
          background: 'green',
          color: 'white',
        },
      });
      setTimeout(() => {
        navigate('/login');
      }, 3000); // Navigate to login page after 3 seconds
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.', {
        style: {
          background: 'red',
          color: 'white',
        },
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Toaster position="top-center" />
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <div className="mb-4">
            <label htmlFor="full_name" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact_phone" className="block text-gray-700">
              Contact Phone
            </label>
            <input
              type="text"
              id="contact_phone"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="adress" className="block text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="adress"
              name="adress"
              value={formData.adress}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
