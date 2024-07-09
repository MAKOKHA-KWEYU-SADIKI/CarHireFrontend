import Navbar from "../components/navbar";

const Register = () => {
  return (<div>
    <Navbar/>
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label htmlFor="user_id" className="block text-gray-700">User ID</label>
          <input type="number" id="user_id" name="user_id" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700">Role</label>
          <select id="role" name="role" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            <option value="" disabled>Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Register</button>
      </form>
    </div>
    </div>
 
  );
};

export default Register;
