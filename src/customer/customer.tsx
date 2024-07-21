// // import React, { useState } from 'react';
// // import { customerAPI } from './customerAPI'; // Adjust the import path as necessary
// // import { Toaster, toast } from 'sonner';

// // const CustomerSupportForm: React.FC = () => {
// //   const [formData, setFormData] = useState({ subject: '', description: '', status: '' });
// //   const [createCustomer] = customerAPI.useCreatesupportMutation();

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     try {
// //       await createCustomer(formData).unwrap();
// //       toast.success('Ticket created successfully');
// //       setFormData({ subject: '', description: '', status: '' });
// //     } catch (error) {
// //       toast.error('Failed to create ticket');
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <Toaster position="top-center" />
// //       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
// //         <h2 className="text-2xl mb-4">Customer Support</h2>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Subject</label>
// //           <input
// //             type="text"
// //             name="subject"
// //             value={formData.subject}
// //             onChange={handleChange}
// //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Description</label>
// //           <textarea
// //             name="description"
// //             value={formData.description}
// //             onChange={handleChange}
// //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //             rows={4}
// //           ></textarea>
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Status</label>
// //           <input
// //             type="text"
// //             name="status"
// //             value={formData.status}
// //             onChange={handleChange}
// //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //           />
// //         </div>
// //         <div className="flex justify-end">
// //           <button
// //             type="submit"
// //             className="btn btn-sm btn-outline btn-info text-white"
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CustomerSupportForm;
// import React, { useState } from 'react';
// import { customerAPI } from './customerAPI';
// import { Toaster, toast } from 'sonner';
// import { error } from 'console';

// const CustomerSupportForm: React.FC = () => {
//   const [formData, setFormData] = useState({ subject: '', description: '', status: '', user_id: localStorage.getItem('user_id') || '',});
//   const [createCustomer] = customerAPI.useCreateCustomerMutation();


//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
// console.log(formData)
// if(error){
//     console.log(error)
// }
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await createCustomer(formData).unwrap();
//       toast.success('thanks for sending feedback');
//       setFormData({ subject: '', description: '', status: '',user_id: localStorage.getItem('user_id') || '', });
//       if (error){
//         console.log(error)
//       }
//     } catch (error) {
//       toast.error('Failed to send feedback');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Toaster position="top-center" />
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
//         <h2 className="text-2xl mb-4">Customer Support</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Subject</label>
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//             rows={4}
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Status</label>
//           <input
//             type="text"
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="btn btn-sm btn-outline btn-info text-white"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CustomerSupportForm;
import React, { useState } from 'react';
import { customerAPI } from './customerAPI';
import { Toaster, toast } from 'sonner';

const CustomerSupportForm: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    status: '',
    user_id: localStorage.getItem('userid') || '',
  });

  const [createCustomer] = customerAPI.useCreateCustomerMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert user_id to number
    const userId = Number(formData.user_id);

    if (isNaN(userId)) {
      toast.error('Invalid user ID');
      return;
    }

    const requestData = {
      ...formData,
      user_id: userId, // Convert to number
    };

    try {
      await createCustomer(requestData).unwrap();
      toast.success('Thanks for sending feedback');
      setFormData({ subject: '', description: '', status: '', user_id: localStorage.getItem('userid') || '' });
    } catch (error) {
      toast.error('Failed to send feedback');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl mb-4">Customer Support</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            rows={4}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-sm btn-outline btn-info text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerSupportForm;
