import React from 'react';
import { customerAPI, TUcustomer } from './customerAPI';
import { Toaster, toast } from 'sonner';

const CustomerSupportTable: React.FC = () => {
  const { data: tickets, error, isLoading } = customerAPI.useGetcustomerQuery();


  if (isLoading) return <div>Loading...</div>;
  if (error) {
    toast.error('Failed to fetch data');
    return <div>Error fetching data</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Toaster position="top-center" />
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Customer Support Tickets</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets?.map((ticket: TUcustomer) => (
              <tr key={ticket.ticket_id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.ticket_id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.user_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerSupportTable;
