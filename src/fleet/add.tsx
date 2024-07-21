// // // import React from 'react';
// // // import { fleetAPI, TUfleet } from './fleetAPI';
// // // import { toast, Toaster } from 'sonner';
// // // import { UseSelector } from 'react-redux';
// // // import UpdateProfile from './updateFleet';
// // // import { update } from './updateFleet';
// // // import { RootState } from '../app/store';
// // // import { useState } from 'react';
// // // const Fleet: React.FC = () => {
// // //   const { data: fleetData, isLoading, isError } = fleetAPI.useGetfleetQuery();
// // //   const[deleteFleet,{ data:deletemsg}]=fleetAPI.useDeletefleetMutation()
// // //   const[isModalOpen,setIsModalOpen]=useState(false)
// // //   const userId = localStorage.getItem('userid');
// // // console.log(fleetData)
// // // const handleDelete=async(id:number)=>{
// // //   await deleteFleet(id).unwrap()
// // // }
// // //   if (isLoading) {
// // //     return <div>Loading...</div>;
// // //   }

// // //   if (isError) {
// // //     return <div>Error loading vehicle data.</div>;
// // //   }

// // //   if (!fleetData) {
// // //     return <div>No vehicle data available.</div>;
// // //   }
// // //   const handleFleetAction = (action: string, vehicle: TUfleet) => {
// // //     if (action === 'update') {
// // //       toast.success(`Update for ${vehicle.vehicle_id} successful!`);
// // //     } else if (action === 'delete') {
// // //       toast.success(`Delete for ${vehicle.vehicle_id} successful!`);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <Toaster
// // //         toastOptions={{
// // //           classNames: {
// // //             error: 'bg-red-400',
// // //             success: 'text-green-400',
// // //             warning: 'text-yellow-400',
// // //             info: 'bg-blue-400',
// // //           },
// // //         }}
// // //       />
// // //       <div className="container mx-auto p-4">
// // //         <div className="bg-blue-100 rounded-lg p-4">
// // //           <h1 className="text-xl my-4">Fleet Data</h1>
// // //           <div className="overflow-No">
// // //             <table className="min-w-full bg-white">
// // //               <thead>
// // //                 <tr>
// // //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Vehicle ID</th>
// // //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Date</th>
// // //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Depreciation Rate</th>
// // //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Current Value</th>
// // //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Maintenance Cost</th>
// // //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Status</th>
// // //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Actions</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {fleetData.map((vehicle: TUfleet, index: number) => (
// // //                   <tr key={index}>
// // //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.vehicle_id}</td>
// // //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.acquisition_date}</td>
// // //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.depreciation_rate}</td>
// // //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.current_value}</td>
// // //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.maintainance_cost}</td>
// // //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.status}</td>
// // //                     <td className="px-4 py-2 border-b border-gray-500">
// // //                       <div className="flex space-x-1">
// // //                         <button
// // //                           onClick={() => setIsModalOpen(true)}
// // //                           className="btn btn-sm btn-outline btn-info text-white flex-shrink-0"
// // //                         >
// // //                           Update
// // //                         </button>
// // //                         <button
// // //                           onClick={() => handleDelete(vehicle.fleet_id)}
// // //                           className="btn btn-sm btn-outline btn-warning flex-shrink-0"
// // //                         >
// // //                           Delete
// // //                         </button>
// // //                       </div>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //               <tfoot>
// // //                 <tr>
// // //                   <td colSpan={7} className="px-4 py-2 text-center">{fleetData.length} records</td>
// // //                 </tr>
// // //               </tfoot>
// // //             </table>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Fleet;
// // import React, { useState } from 'react';
// // import { fleetAPI, TUfleet } from './fleetAPI';
// // import { toast, Toaster } from 'sonner';
// // import UpdateProfile from './updateFleet'; // Ensure this import path is correct

// // const Fleet: React.FC = () => {
// //   const { data: fleetData, isLoading, isError } = fleetAPI.useGetfleetQuery();
// //   const [deleteFleet] = fleetAPI.useDeletefleetMutation();
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedVehicle, setSelectedVehicle] = useState<TUfleet | null>(null);

// //   const handleDelete = async (id: number) => {
// //     try {
// //       await deleteFleet(id).unwrap();
// //       toast.success('Vehicle deleted successfully');
// //     } catch (error) {
// //       toast.error('Failed to delete vehicle');
// //     }
// //   };

// //   const handleUpdate = (vehicle: TUfleet) => {
// //     setSelectedVehicle(vehicle);
// //     setIsModalOpen(true);
// //   };

// //   if (isLoading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (isError) {
// //     return <div>Error loading vehicle data.</div>;
// //   }

// //   if (!fleetData) {
// //     return <div>No vehicle data available.</div>;
// //   }

// //   return (
// //     <>
// //       <Toaster
// //         toastOptions={{
// //           classNames: {
// //             error: 'bg-red-400',
// //             success: 'text-green-400',
// //             warning: 'text-yellow-400',
// //             info: 'bg-blue-400',
// //           },
// //         }}
// //       />
// //       <div className="container mx-auto p-4">
// //         <div className="bg-blue-100 rounded-lg p-4">
// //           <h1 className="text-xl my-4">Fleet Data</h1>
// //           <div className="overflow-x-auto">
// //             <table className="min-w-full bg-white">
// //               <thead>
// //                 <tr>
// //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Vehicle ID</th>
// //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Date</th>
// //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Depreciation Rate</th>
// //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Current Value</th>
// //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Maintenance Cost</th>
// //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Status</th>
// //                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {fleetData.map((vehicle: TUfleet, index: number) => (
// //                   <tr key={index}>
// //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.vehicle_id}</td>
// //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.acquisition_date}</td>
// //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.depreciation_rate}</td>
// //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.current_value}</td>
// //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.maintainance_cost}</td>
// //                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.status}</td>
// //                     <td className="px-4 py-2 border-b border-gray-500">
// //                       <div className="flex space-x-1">
// //                         <button
// //                           onClick={() => handleUpdate(vehicle)}
// //                           className="btn btn-sm btn-outline btn-info text-white flex-shrink-0"
// //                         >
// //                           Update
// //                         </button>
// //                         <button
// //                           onClick={() => handleDelete(vehicle.fleet_id)}
// //                           className="btn btn-sm btn-outline btn-warning flex-shrink-0"
// //                         >
// //                           Delete
// //                         </button>
// //                       </div>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //               <tfoot>
// //                 <tr>
// //                   <td colSpan={7} className="px-4 py-2 text-center">{fleetData.length} records</td>
// //                 </tr>
// //               </tfoot>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
 
// //     </>
// //   );
// // };

// // export default Fleet;
// import React, { useState } from 'react';
// import { fleetAPI, TUfleet } from './fleetAPI';
// import { toast, Toaster } from 'sonner';
// import Updatefleet from './updateFleet';

// const Fleet: React.FC = () => {
//   const { data: fleetData, isLoading, isError } = fleetAPI.useGetfleetQuery();
//   const [deleteFleet] = fleetAPI.useDeletefleetMutation();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState<TUfleet | null>(null);

//   const handleDelete = async (id: number) => {
//     try {
//       await deleteFleet(id).unwrap();
//       toast.success('Vehicle deleted successfully');
//     } catch (error) {
//       toast.error('Failed to delete vehicle');
//     }
//   };

//   const handleUpdate = (vehicle: TUfleet) => {
//     setSelectedVehicle(vehicle);
//     setIsModalOpen(true);
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error loading vehicle data.</div>;
//   }

//   if (!fleetData) {
//     return <div>No vehicle data available.</div>;
//   }

//   return (
//     <>
//       <Toaster
//         toastOptions={{
//           classNames: {
//             error: 'bg-red-400',
//             success: 'text-green-400',
//             warning: 'text-yellow-400',
//             info: 'bg-blue-400',
//           },
//         }}
//       />
//       <div className="container mx-auto p-4">
//         <div className="bg-blue-100 rounded-lg p-4">
//           <h1 className="text-xl my-4">Fleet Data</h1>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Vehicle ID</th>
//                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Date</th>
//                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Depreciation Rate</th>
//                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Current Value</th>
//                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Maintenance Cost</th>
//                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Status</th>
//                   <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {fleetData.map((vehicle: TUfleet, index: number) => (
//                   <tr key={index}>
//                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.vehicle_id}</td>
//                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.acquisition_date}</td>
//                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.depreciation_rate}</td>
//                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.current_value}</td>
//                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.maintainance_cost}</td>
//                     <td className="px-4 py-2 border-b border-gray-500">{vehicle.status}</td>
//                     <td className="px-4 py-2 border-b border-gray-500">
//                       <div className="flex space-x-1">
//                         <button
//                           onClick={() => handleUpdate(vehicle)}
//                           className="btn btn-sm btn-outline btn-info text-white flex-shrink-0"
//                         >
//                           Update
//                         </button>
//                         <button
//                           onClick={() => handleDelete(vehicle.fleet_id)}
//                           className="btn btn-sm btn-outline btn-warning flex-shrink-0"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td colSpan={7} className="px-4 py-2 text-center">{fleetData.length} records</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && selectedVehicle && (
//         <Updatefleet
//           fleet_id={selectedVehicle.vehicle_id}
//           fleetData={selectedVehicle}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Fleet;
import React, { useState } from 'react';
import { fleetAPI, TUfleet } from './fleetAPI';
import { toast, Toaster } from 'sonner';
import Updatefleet from './updateFleet';

const Fleet: React.FC = () => {
  const { data: fleetData, isLoading, isError } = fleetAPI.useGetfleetQuery();
  const [deleteFleet] = fleetAPI.useDeletefleetMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<TUfleet | null>(null);

  const handleDelete = async (id: number) => {
    try {
      await deleteFleet(id).unwrap();
      toast.success('Vehicle deleted successfully');
      // if(Error){
      //   console.log(Error)
      // }
    } catch (error) {
      console.log(error)
      toast.error('Failed to delete vehicle');
     
    }
  };

  const handleUpdate = (vehicle: TUfleet) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading vehicle data.</div>;
  }

  if (!fleetData) {
    return <div>No vehicle data available.</div>;
  }

  return (
    <>
      <Toaster
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'text-green-400',
            warning: 'text-yellow-400',
            info: 'bg-blue-400',
          },
        }}
      />
      <div className="container mx-auto p-4">
        <div className="bg-blue-100 rounded-lg p-4">
          <h1 className="text-xl my-4">Fleet Data</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Vehicle ID</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Date</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Depreciation Rate</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Current Value</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Maintenance Cost</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Status</th>
                  <th className="px-4 py-2 border-b border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fleetData.map((vehicle: TUfleet, index: number) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-b border-gray-500">{vehicle.vehicle_id}</td>
                    <td className="px-4 py-2 border-b border-gray-500">{vehicle.acquisition_date}</td>
                    <td className="px-4 py-2 border-b border-gray-500">{vehicle.depreciation_rate}</td>
                    <td className="px-4 py-2 border-b border-gray-500">{vehicle.current_value}</td>
                    <td className="px-4 py-2 border-b border-gray-500">{vehicle.maintainance_cost}</td>
                    <td className="px-4 py-2 border-b border-gray-500">{vehicle.status}</td>
                    <td className="px-4 py-2 border-b border-gray-500">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleUpdate(vehicle)}
                          className="btn btn-sm btn-outline btn-info text-white"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(vehicle.fleet_id)}
                          className="btn btn-sm btn-outline btn-warning"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isModalOpen && selectedVehicle && (
        <Updatefleet
          fleet_id={selectedVehicle.fleet_id}
          fleetData={selectedVehicle}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Fleet;
