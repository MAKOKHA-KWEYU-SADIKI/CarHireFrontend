import React, { useState } from 'react';
import { vehicleAPI,TUvehicle } from '../dashbord/vehicleAPI';
import { Toaster, toast } from 'sonner';
import UpdateVehicleForm from './vehicleEdit';

const VehicleTable: React.FC = () => {
  const { data: vehicles, error, isLoading } = vehicleAPI.useGetVehiclesQuery();
  const [selectedVehicle, setSelectedVehicle] = useState<TUvehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = (vehicle: TUvehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    toast.error('Failed to fetch data');
    return <div>Error fetching data</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Toaster position="top-center" />
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Vehicles Available</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manufacturer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engine Capacity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fuel Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seating Capacity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vehicles?.map((vehicle: TUvehicle) => (
              <tr key={vehicle.vehicle_id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vehicle.vehicleSpecs_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.vehicle.manufacture}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.vehicle.model}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.vehicle.engine_capacity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.vehicle.fuel_type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.vehicle.seating_capacity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.vehicle.year}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{vehicle.avalilability}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleUpdate(vehicle)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedVehicle && (
        <UpdateVehicleForm
          vehicle={selectedVehicle}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default VehicleTable;
