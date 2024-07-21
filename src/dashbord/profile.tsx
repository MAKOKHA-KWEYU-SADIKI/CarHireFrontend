
import React, { useState, useEffect } from 'react';
import { RootState } from '../app/store';
import { useSelector } from "react-redux";
import { useGetProfileQuery } from './profileAPI';
import { toast, Toaster } from 'sonner';
import UpdateProfile from './editProfile';
import image1 from '../assets/profilePic.jpg'
export const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const userId = localStorage.getItem('userid');

  const { data, error, isLoading } = useGetProfileQuery(Number(userId));
  console.log(data)
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold mb-6 text-center">Profile Details</h1>
      <div className="flex flex-col items-center">
        <div className="p-6 border rounded-lg w-full md:w-3/4 lg:w-1/2 bg-gray-100 shadow-lg text-2xl">
          <img src={image1} className='w-20 h-20'></img>
          <h2 className="text-2xl mb-4">Welcome back, <span className="text-green-500">{data?.full_name}</span></h2>
          <p className=''><strong>Phone:</strong> {data?.contact_phone}</p>
          <p><strong>Email:</strong> {data?.email}</p>
          <p><strong>Role:</strong> {data?.role}</p>
          <p><strong>Full name:</strong> {data?.full_name}</p>
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsModalOpen(true)}
          >
            Update Profile
          </button>
        </div>
      </div>

      {isModalOpen && (
        <UpdateProfile
          userId={userId}
          profileData={{
            full_name: data?.full_name || '',
            email: data?.email || '',
            contact_phone: data?.contact_phone || '',
            address: data?.adress || '',
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Profile;
