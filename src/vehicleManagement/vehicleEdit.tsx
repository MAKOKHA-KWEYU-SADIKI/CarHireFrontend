
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TUvehicle,vehicleAPI } from '../dashbord/vehicleAPI';
import { toast, Toaster } from 'sonner';

interface UpdateVehicleFormProps {
  vehicle: TUvehicle;
  onClose: () => void;
}

const UpdateVehicleForm: React.FC<UpdateVehicleFormProps> = ({ vehicle, onClose }) => {
  const [formData, setFormData] = useState<TUvehicle>(vehicle);
  const [updateVehicle] = vehicleAPI.useUpdateVehicleMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in formData.vehicle) {
      setFormData({
        ...formData,
        vehicle: {
          ...formData.vehicle,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await updateVehicle(formData).unwrap();
      toast.success('Vehicle updated successfully');
      onClose();
    } catch (error) {
      console.error('Failed to update vehicle:', error);
      toast.error('Failed to update vehicle');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <Toaster position="top-center" />
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Update Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Manufacturer</label>
            <input
              type="text"
              name="manufacture"
              value={formData.vehicle.manufacture}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Model</label>
            <input
              type="text"
              name="model"
              value={formData.vehicle.model}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Engine Capacity</label>
            <input
              type="text"
              name="engine_capacity"
              value={formData.vehicle.engine_capacity}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fuel Type</label>
            <input
              type="text"
              name="fuel_type"
              value={formData.vehicle.fuel_type}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Seating Capacity</label>
            <input
              type="text"
              name="seating_capacity"
              value={formData.vehicle.seating_capacity}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Year</label>
            <input
              type="text"
              name="year"
              value={formData.vehicle.year}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Availability</label>
            <input
              type="text"
              name="avalilability"
              value={formData.avalilability}
              onChange={handleChange}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateVehicleForm;
