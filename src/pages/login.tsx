
import React, { useState } from 'react';
import { loginAPI } from '../features/userloginApi';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';
import Navbar from "../components/navbar";
import Footer from '../components/footer';


export interface LoginRequest {
  email: string;
  password: string;
}

const Login = () => {
  const [loginUser, { isLoading, error }] = loginAPI.useLoginUserMutation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response:any = await loginUser({ email, password }).unwrap();
      toast.success(`Welcome back, ${response.full_name}!`);
      // dispatch(setUser(response));
      localStorage.setItem('token',response.token)
      localStorage.setItem('userid',response.user.user_id)
      dispatch(setUser(response))
      response.user.role === "admin" && navigate("/admin");
      response.user.role === "user" && navigate("/user");
      if(error){
        console.log(error)
      }
    } catch (err) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
   <div>
    <Navbar/>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full p-3 bg-teal-600 text-white font-bold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="mt-4 text-red-600">Login failed. Please try again.</p>}
        </form>
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default Login;
