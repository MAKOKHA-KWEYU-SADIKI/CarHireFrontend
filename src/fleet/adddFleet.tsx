// import React, { useState } from 'react';
// import { fleetAPI } from './fleetAPI';
// import { toast } from 'sonner';

// const AddFleet: React.FC = () => {
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const [capacity, setCapacity] = useState('');
//   const [available, setAvailable] = useState(true);
  
//   const [addFleet, { isLoading }] = fleetAPI.useCreatefleetMutation();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await addFleet({ name, type, capacity: Number(capacity), available }).unwrap();
//       toast.success('Fleet added successfully');
//       setName('');
//       setType('');
//       setCapacity('');
//       setAvailable(true);
//     } catch (err) {
//       toast.error('Failed to add fleet');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-6">Add New Fleet</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Type</label>
//           <input
//             type="text"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Capacity</label>
//           <input
//             type="number"
//             value={capacity}
//             onChange={(e) => setCapacity(e.target.value)}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             checked={available}
//             onChange={(e) => setAvailable(e.target.checked)}
//             className="mr-2"
//           />
//           <label className="text-sm font-medium">Available</label>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Adding...' : 'Add Fleet'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddFleet;
