import React, { useState, useEffect } from 'react';
import { bookingAPI } from './bookingAPI';
import {  toast } from 'sonner';
import { TUbook } from './bookingAPI';

function EditBooking({ booking }: { booking: TUbook }) {
  const [formData, setFormData] = useState<TUbook>({ ...booking });
  const [updateBook] = bookingAPI.useUpdateBookMutation();
  const [deleteBook] = bookingAPI.useDeleteBookMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await updateBook(formData);
      toast.success('Booking updated successfully');
    } catch (error) {
      toast.error('Failed to update booking');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteBook(booking.booking_id);
      toast.success('Booking deleted successfully');
    } catch (error) {
      toast.error('Failed to delete booking');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl mb-4">Edit Booking</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Booking Status</label>
        <select
          name="booking_status"
          value={formData.booking_status}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Total Amount</label>
        <input
          type="number"
          name="total_amount"
          value={formData.total_amount}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={handleUpdate}
          className="btn btn-sm btn-outline btn-info text-white"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-outline btn-warning"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EditBooking;
