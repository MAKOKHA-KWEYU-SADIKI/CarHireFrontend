
import React from 'react';
import { TUvehicle } from './vehicleAPI';
import image1 from '../assets/bmw1.png';
import { Toaster, toast } from 'sonner';
import { vehicleAPI } from './vehicleAPI';
const VehicleList: React.FC = () => {
  const { data: vehicles,isLoading, isError } = vehicleAPI.useGetVehiclesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading vehicle data.</div>;
  }

  if (!vehicles) {
    return <div>No vehicle data available.</div>;
  }

  const handleBook = (vehicle: TUvehicle) => {
    // Implement booking logic here
    toast.success(`Booking for ${vehicle.vehicle.manufacture} ${vehicle.vehicle.model} successful!`);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold mb-6 text-center">Vehicle List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle: TUvehicle) => (
          <div key={vehicle.vehicle_id} className="p-6 border rounded-lg bg-gray-100 shadow-lg">
            <img src={image1} alt={`${vehicle.vehicle.manufacture} ${vehicle.vehicle.model}`} className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h2 className="text-xl font-bold mb-2">{vehicle.vehicle.manufacture} {vehicle.vehicle.model}</h2>
            <p className="text-gray-700"><strong>Engine Capacity:</strong> {vehicle.vehicle.engine_capacity}</p>
            <p className="text-gray-700"><strong>Fuel Type:</strong> {vehicle.vehicle.fuel_type}</p>
            <p className="text-gray-700"><strong>Seating Capacity:</strong> {vehicle.vehicle.seating_capacity}</p>
            <p className="text-gray-700 mb-4"><strong>Year:</strong> {vehicle.vehicle.year}</p>
            <button
              onClick={() => handleBook(vehicle)}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
