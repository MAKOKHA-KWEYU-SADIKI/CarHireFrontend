// // // import React, { useState, useEffect } from 'react';
// // // import { fleetAPI, TUfleet } from './fleetAPI';
// // // import { toast } from 'sonner';

// // // export interface UpdateProps {
// // //   fleet_id: number;
// // //   fleetData: TUfleet;
// // //   onClose: () => void;
// // // }

// // // const Updatefleet: React.FC<UpdateProps> = ({ fleet_id, fleetData, onClose }) => {
// // //   const [formData, setFormData] = useState<TUfleet>({ ...fleetData });
// // //   const [updateFleet] = fleetAPI.useUpdatefleetMutation();
// // //   const [deleteFleet] = fleetAPI.useDeletefleetMutation();

// // //   useEffect(() => {
// // //     setFormData(fleetData);
// // //   }, [fleetData]);

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleUpdate = async () => {
// // //     try {
// // //       await updateFleet({ fleet_id, ...formData }).unwrap();
// // //       toast.success('Fleet updated successfully');
// // //       onClose();
// // //     } catch (error) {
// // //       toast.error('Failed to update fleet');
// // //     }
// // //   };

// // //   const handleDelete = async () => {
// // //     try {
// // //       await deleteFleet(fleet_id).unwrap();
// // //       toast.success('Fleet deleted successfully');
// // //       onClose();
// // //     } catch (error) {
// // //       toast.error('Failed to delete fleet');
// // //     }
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
// // //       <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
// // //         <h2 className="text-2xl mb-4">Edit Fleet</h2>
// // //         <div className="mb-4">
// // //           <label className="block text-sm font-medium text-gray-700">Acquisition Date</label>
// // //           <input
// // //             type="text"
// // //             name="acquisition_date"
// // //             value={formData.acquisition_date}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block text-sm font-medium text-gray-700">Depreciation Rate</label>
// // //           <input
// // //             type="text"
// // //             name="depreciation_rate"
// // //             value={formData.depreciation_rate}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block text-sm font-medium text-gray-700">Current Value</label>
// // //           <input
// // //             type="text"
// // //             name="current_value"
// // //             value={formData.current_value}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block text-sm font-medium text-gray-700">Maintenance Cost</label>
// // //           <input
// // //             type="text"
// // //             name="maintainance_cost"
// // //             value={formData.maintainance_cost}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// // //           />
// // //         </div>
// // //         <div className="mb-4">
// // //           <label className="block text-sm font-medium text-gray-700">Status</label>
// // //           <input
// // //             type="text"
// // //             name="status"
// // //             value={formData.status}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// // //           />
// // //         </div>
// // //         <div className="flex justify-end space-x-2">
// // //           <button onClick={handleUpdate} className="btn btn-sm btn-outline btn-info text-white">
// // //             Update
// // //           </button>
// // //           <button onClick={handleDelete} className="btn btn-sm btn-outline btn-warning">
// // //             Delete
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Updatefleet;
// // import React, { useState, useEffect } from 'react';
// // import { fleetAPI, TUfleet } from './fleetAPI';
// // import { toast } from 'sonner';

// // export interface UpdateProps {
// //   fleet_id: number;
// //   fleetData: TUfleet;
// //   onClose: () => void;
// // }

// // const Updatefleet: React.FC<UpdateProps> = ({ fleet_id, fleetData, onClose }) => {
// //   const [formData, setFormData] = useState<TUfleet>({ ...fleetData });
// //   const [updateFleet] = fleetAPI.useUpdatefleetMutation();
// //   const [deleteFleet] = fleetAPI.useDeletefleetMutation();

// //   useEffect(() => {
// //     setFormData(fleetData);
// //   }, [fleetData]);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleUpdate = async () => {
// //     try {
// //       const { fleet_id: formFleetId, ...updateData } = formData;
// //       await updateFleet({ fleet_id, ...updateData }).unwrap();
// //       toast.success('Fleet updated successfully');
// //       onClose();
// //     } catch (error) {
// //       toast.error('Failed to update fleet');
// //     }
// //   };

// //   const handleDelete = async () => {
// //     try {
// //       await deleteFleet(fleet_id).unwrap();
// //       toast.success('Fleet deleted successfully');
// //       onClose();
// //     } catch (error) {
// //       toast.error('Failed to delete fleet');
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
// //       <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
// //         <h2 className="text-2xl mb-4">Edit Fleet</h2>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Acquisition Date</label>
// //           <input
// //             type="text"
// //             name="acquisition_date"
// //             value={formData.acquisition_date}
// //             onChange={handleChange}
// //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Depreciation Rate</label>
// //           <input
// //             type="text"
// //             name="depreciation_rate"
// //             value={formData.depreciation_rate}
// //             onChange={handleChange}
// //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Current Value</label>
// //           <input
// //             type="text"
// //             name="current_value"
// //             value={formData.current_value}
// //             onChange={handleChange}
// //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">Maintenance Cost</label>
// //           <input
// //             type="text"
// //             name="maintainance_cost"
// //             value={formData.maintainance_cost}
// //             onChange={handleChange}
// //             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
// //           />
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
// //         <div className="flex justify-end space-x-2">
// //           <button onClick={handleUpdate} className="btn btn-sm btn-outline btn-info text-white">
// //             Update
// //           </button>
// //           <button onClick={handleDelete} className="btn btn-sm btn-outline btn-warning">
// //             Delete
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Updatefleet;
// import React, { useState, useEffect } from 'react';
// import { fleetAPI, TUfleet } from './fleetAPI';
// import { toast } from 'sonner';

// export interface UpdateProps {
//   fleet_id: number;
//   fleetData: TUfleet;
//   onClose: () => void;
// }

// const Updatefleet: React.FC<UpdateProps> = ({ fleet_id, fleetData, onClose }) => {
//   const [formData, setFormData] = useState<TUfleet>({ ...fleetData });
//   const [updateFleet] = fleetAPI.useUpdatefleetMutation();
//   const [deleteFleet] = fleetAPI.useDeletefleetMutation();

//   useEffect(() => {
//     setFormData(fleetData);
//   }, [fleetData]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async () => {
//     try {
//       const updateData = {
//         fleet_id,
//         vehicle_id: Number(formData.vehicle_id),
//         acquisition_date: formData.acquisition_date,
//         depreciation_rate: Number(formData.depreciation_rate),
//         current_value: Number(formData.current_value),
//         maintainance_cost: Number(formData.maintainance_cost),
//         status: formData.status,
//       };
//       await updateFleet(updateData).unwrap();
//       toast.success('Fleet updated successfully');
//       onClose();
//     } catch (error) {
//       toast.error('Failed to update fleet');
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteFleet(fleet_id).unwrap();
//       toast.success('Fleet deleted successfully');
//       onClose();
//     } catch (error) {
//       toast.error('Failed to delete fleet');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
//         <h2 className="text-2xl mb-4">Edit Fleet</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Acquisition Date</label>
//           <input
//             type="text"
//             name="acquisition_date"
//             value={formData.acquisition_date}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Depreciation Rate</label>
//           <input
//             type="text"
//             name="depreciation_rate"
//             value={formData.depreciation_rate}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Current Value</label>
//           <input
//             type="text"
//             name="current_value"
//             value={formData.current_value}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Maintenance Cost</label>
//           <input
//             type="text"
//             name="maintainance_cost"
//             value={formData.maintainance_cost}
//             onChange={handleChange}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
//           />
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
//         <div className="flex justify-end space-x-2">
//           <button onClick={handleUpdate} className="btn btn-sm btn-outline btn-info text-white">
//             Update
//           </button>
//           <button onClick={handleDelete} className="btn btn-sm btn-outline btn-warning">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Updatefleet;
import React, { useState, useEffect } from 'react';
import { fleetAPI, TUfleet } from './fleetAPI';
import { toast } from 'sonner';

export interface UpdateProps {
  fleet_id: number;
  fleetData: TUfleet;
  onClose: () => void;
}

const Updatefleet: React.FC<UpdateProps> = ({ fleet_id, fleetData, onClose }) => {
  const [formData, setFormData] = useState<TUfleet>({ ...fleetData });
  const [updateFleet] = fleetAPI.useUpdatefleetMutation();
  const [deleteFleet] = fleetAPI.useDeletefleetMutation();

  useEffect(() => {
    setFormData(fleetData);
  }, [fleetData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const updateData = {
        fleet_id,
        vehicle_id: Number(formData.vehicle_id),
        acquisition_date: formData.acquisition_date,
        depreciation_rate: formData.depreciation_rate.toString(),
        current_value: formData.current_value.toString(),
        maintainance_cost: formData.maintainance_cost.toString(),
        status: formData.status,
      };
      await updateFleet(updateData).unwrap();
      toast.success('Fleet updated successfully');
      onClose();
    } catch (error) {
      toast.error('Failed to update fleet');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteFleet(fleet_id).unwrap();
      toast.success('Fleet deleted successfully');
      onClose();
    } catch (error) {
      toast.error('Failed to delete fleet');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl mb-4">Edit Fleet</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Acquisition Date</label>
          <input
            type="text"
            name="acquisition_date"
            value={formData.acquisition_date}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Depreciation Rate</label>
          <input
            type="text"
            name="depreciation_rate"
            value={formData.depreciation_rate}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Current Value</label>
          <input
            type="text"
            name="current_value"
            value={formData.current_value}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Maintenance Cost</label>
          <input
            type="text"
            name="maintainance_cost"
            value={formData.maintainance_cost}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          />
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
        <div className="flex justify-end space-x-2">
          <button onClick={handleUpdate} className="btn btn-sm btn-outline btn-info text-white">
            Update
          </button>
          <button onClick={handleDelete} className="btn btn-sm btn-outline btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updatefleet;
