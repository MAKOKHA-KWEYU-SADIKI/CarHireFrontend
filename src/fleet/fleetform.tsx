// // import React, { useState } from 'react';
// // import { TUfleet } from './fleetAPI';

// // interface FleetFormProps {
// //   initialData?: TUfleet;
// //   onSubmit: (data: TUfleet) => void;
// //   onClose: () => void;
// // }

// // const FleetForm: React.FC<FleetFormProps> = ({ initialData, onSubmit, onClose }) => {
// //   const [vehicleId, setVehicleId] = useState(initialData?.vehicle_id || '');
// //   const [acquisitionDate, setAcquisitionDate] = useState(initialData?.acquisition_date || '');
// //   const [depreciationRate, setDepreciationRate] = useState(initialData?.depreciation_rate || '');
// //   const [currentValue, setCurrentValue] = useState(initialData?.current_value || '');
// //   const [maintenanceCost, setMaintenanceCost] = useState(initialData?.maintainance_cost || '');
// //   const [status, setStatus] = useState(initialData?.status || '');

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     const newFleetData: TUfleet = {
// //       vehicle_id: vehicleId,
// //       acquisition_date: acquisitionDate,
// //       depreciation_rate: depreciationRate,
// //       current_value: currentValue,
// //       maintainance_cost: maintenanceCost,
// //       status: status,
// //     };
// //     onSubmit(newFleetData);
// //   };

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
// //         <h2 className="text-xl font-semibold mb-4">{initialData ? 'Update Fleet' : 'Add Fleet'}</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Vehicle ID</label>
// //             <input
// //               type="text"
// //               value={vehicleId}
// //               onChange={(e) => setVehicleId(e.target.value)}
// //               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Acquisition Date</label>
// //             <input
// //               type="text"
// //               value={acquisitionDate}
// //               onChange={(e) => setAcquisitionDate(e.target.value)}
// //               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Depreciation Rate</label>
// //             <input
// //               type="text"
// //               step="0.01"
// //               value={depreciationRate}
// //               onChange={(e) => setDepreciationRate(e.target.value)}
// //               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Current Value</label>
// //             <input
// //               type="text"
// //               step="0.01"
// //               value={currentValue}
// //               onChange={(e) => setCurrentValue(e.target.value)}
// //               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Maintenance Cost</label>
// //             <input
// //               type="text"
// //               step="0.01"
// //               value={maintenanceCost}
// //               onChange={(e) => setMaintenanceCost(e.target.value)}
// //               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Status</label>
// //             <input
// //               type="text"
// //               value={status}
// //               onChange={(e) => setStatus(e.target.value)}
// //               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
// //               required
// //             />
// //           </div>
// //           <div className="flex justify-end space-x-2">
// //             <button
// //               type="button"
// //               onClick={onClose}
// //               className="btn btn-outline btn-gray-500"
// //             >
// //               Cancel
// //             </button>
// //             <button
// //               type="submit"
// //               className="btn btn-primary"
// //             >
// //               {initialData ? 'Update' : 'Add'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FleetForm;
// import React, { useState } from 'react';
// import { TUfleet } from './fleetAPI';

// interface FleetFormProps {
//   initialData?: TUfleet;
//   onSubmit: (data: TUfleet) => void;
//   onClose: () => void;
// }

// const FleetForm: React.FC<FleetFormProps> = ({ initialData, onSubmit, onClose }) => {
//   const [vehicleId, setVehicleId] = useState<number | ''>(initialData?.vehicle_id ?? '');
//   const [acquisitionDate, setAcquisitionDate] = useState(initialData?.acquisition_date ?? '');
//   const [depreciationRate, setDepreciationRate] = useState(initialData?.depreciation_rate ?? '');
//   const [currentValue, setCurrentValue] = useState(initialData?.current_value ?? '');
//   const [maintenanceCost, setMaintenanceCost] = useState(initialData?.maintainance_cost ?? '');
//   const [status, setStatus] = useState(initialData?.status ?? '');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newFleetData: TUfleet = {
//       vehicle_id: vehicleId as number,
//       acquisition_date: acquisitionDate,
//       depreciation_rate: depreciationRate,
//       current_value: currentValue,
//       maintainance_cost: maintenanceCost,
//       status: status,
      
//     };
//     onSubmit(newFleetData);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold mb-4">{initialData ? 'Update Fleet' : 'Add Fleet'}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Vehicle ID</label>
//             <input
//               type="number"
//               value={vehicleId}
//               onChange={(e) => setVehicleId(e.target.value === '' ? '' : Number(e.target.value))}
//               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Acquisition Date</label>
//             <input
//               type="text"
//               value={acquisitionDate}
//               onChange={(e) => setAcquisitionDate(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Depreciation Rate</label>
//             <input
//               type="text"
//               step="0.01"
//               value={depreciationRate}
//               onChange={(e) => setDepreciationRate(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Current Value</label>
//             <input
//               type="text"
//               step="0.01"
//               value={currentValue}
//               onChange={(e) => setCurrentValue(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Maintenance Cost</label>
//             <input
//               type="text"
//               step="0.01"
//               value={maintenanceCost}
//               onChange={(e) => setMaintenanceCost(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Status</label>
//             <input
//               type="text"
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
//               required
//             />
//           </div>
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="btn btn-outline btn-gray-500"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="btn btn-primary"
//             >
//               {initialData ? 'Update' : 'Add'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FleetForm;
import React, { useState } from 'react';
import { TUfleet } from './fleetAPI';

interface FleetFormProps {
  initialData?: TUfleet;
  onSubmit: (data: TUfleet) => void;
  onClose: () => void;
}

const FleetForm: React.FC<FleetFormProps> = ({ initialData, onSubmit, onClose }) => {
  const [vehicleId, setVehicleId] = useState<number | ''>(initialData?.vehicle_id ?? '');
  const [acquisitionDate, setAcquisitionDate] = useState(initialData?.acquisition_date ?? '');
  const [depreciationRate, setDepreciationRate] = useState(initialData?.depreciation_rate ?? '');
  const [currentValue, setCurrentValue] = useState(initialData?.current_value ?? '');
  const [maintenanceCost, setMaintenanceCost] = useState(initialData?.maintainance_cost ?? '');
  const [status, setStatus] = useState(initialData?.status ?? '');
  const [fleetId, setFleetId] = useState<number | ''>(initialData?.fleet_id ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFleetData: TUfleet = {
      vehicle_id: vehicleId as number,
      acquisition_date: acquisitionDate,
      depreciation_rate: depreciationRate,
      current_value: currentValue,
      maintainance_cost: maintenanceCost,
      status: status,
      fleet_id: fleetId as number, // Ensure fleet_id is included
    };
    onSubmit(newFleetData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{initialData ? 'Update Fleet' : 'Add Fleet'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Vehicle ID</label>
            <input
              type="number"
              value={vehicleId}
              onChange={(e) => setVehicleId(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Acquisition Date</label>
            <input
              type="text"
              value={acquisitionDate}
              onChange={(e) => setAcquisitionDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Depreciation Rate</label>
            <input
              type="text"
              step="0.01"
              value={depreciationRate}
              onChange={(e) => setDepreciationRate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Current Value</label>
            <input
              type="text"
              step="0.01"
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Maintenance Cost</label>
            <input
              type="text"
              step="0.01"
              value={maintenanceCost}
              onChange={(e) => setMaintenanceCost(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fleet ID</label>
            <input
              type="number"
              value={fleetId}
              onChange={(e) => setFleetId(e.target.value === '' ? '' : Number(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline btn-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              {initialData ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FleetForm;
