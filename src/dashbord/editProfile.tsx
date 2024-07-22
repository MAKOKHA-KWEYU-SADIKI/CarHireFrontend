
// import React, { useState, useEffect } from 'react';
// import { profileAPI } from './profileAPI';
// import { Toaster, toast } from 'sonner';

// interface ProfileData {
//   userId:number;
//   full_name: string;
//   email: string;
//   contact_phone: string;
//   address: string;
// }

//  interface UpdateProfileProps {
//   userId: number;
//   profileData: ProfileData;
//   onClose: () => void;
// }

// const UpdateProfile: React.FC<UpdateProfileProps> = ({ userId, profileData, onClose }) => {
//   const [formData, setFormData] = useState<ProfileData>({ ...profileData });
//   const [updateProfile] = profileAPI.useUpdateProfileMutation();

//   useEffect(() => {
//     setFormData(profileData);
//   }, [profileData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async () => {
//     try {
//       await updateProfile({  userId, ...formData }).unwrap();
//       toast.success('Profile updated successfully');
//       onClose();
//     } catch (error) {
//       toast.error('Failed to update profile');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//       <Toaster position="top-center" />
//       <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
//         <h2 className="text-2xl mb-4">Edit Profile</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Full Name</label>
//           <input
//             type="text"
//             name="full_name"
//             value={formData.full_name}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Contact Phone</label>
//           <input
//             type="text"
//             name="contact_phone"
//             value={formData.contact_phone}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="btn btn-sm btn-outline btn-warning"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleUpdate}
//             className="btn btn-sm btn-outline btn-info text-white"
//           >
//             Update
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;
import React, { useState, useEffect } from 'react';
import { profileAPI } from './profileAPI';
import { Toaster, toast } from 'sonner';

interface ProfileData {
  full_name: string;
  email: string;
  contact_phone: string;
  address: string;
}

interface UpdateProfileProps {
  userId: number;
  profileData: ProfileData;
  onClose: () => void;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({ userId, profileData, onClose }) => {
  const [formData, setFormData] = useState<ProfileData>({ ...profileData });
  const [updateProfile] = profileAPI.useUpdateProfileMutation();

  useEffect(() => {
    setFormData(profileData);
  }, [profileData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await updateProfile({ userId, ...formData }).unwrap();
      toast.success('Profile updated successfully');
      onClose();
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <Toaster position="top-center" />
      <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl mb-4">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Contact Phone</label>
          <input
            type="text"
            name="contact_phone"
            value={formData.contact_phone}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="btn btn-sm btn-outline btn-warning"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="btn btn-sm btn-outline btn-info text-white"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
