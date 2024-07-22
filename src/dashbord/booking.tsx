
import { useState } from 'react';
import { bookingAPI } from './bookingAPI';
import { Toaster} from 'sonner';
import EditBooking from './editbookings';
import { TUbook } from './bookingAPI';

function BookingTable() {
  const { data: bookingData, error, isLoading, isError } = bookingAPI.useGetBookQuery();
  const [selectedBooking, setSelectedBooking] = useState<TUbook | null>(null);
  console.log(bookingData)
  if (isError) {
    console.log(error);
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
      <div className="overflow-x-auto text-base-content bg-blue-100 rounded-lg p-4">
        <h1 className="text-xl my-4">Booking Data</h1>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Booking Status</th>
              <th>Total Amount</th>
              <th>Booking Date</th>
              <th>Return Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6}>Loading...</td>
              </tr>
            ) : (
              bookingData &&
              bookingData.map((booking: TUbook, index: number) => (
                <tr key={index}>
                  <td>{booking.user_id}</td>
                  <td>{booking.booking_status}</td>
                  <td>{booking.total_amount}</td>
                  <td>{booking.booking_date}</td>
                  <td>{booking.return_date}</td>
                  <td className="flex gap-1">
                    <button
                      className="btn btn-sm btn-outline btn-info text-white"
                      onClick={() => setSelectedBooking(booking)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>{bookingData ? `${bookingData.length} records` : '0 records'}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {selectedBooking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <EditBooking booking={selectedBooking} />
            <button
              className="mt-4 btn btn-sm btn-outline btn-danger"
              onClick={() => setSelectedBooking(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingTable;
