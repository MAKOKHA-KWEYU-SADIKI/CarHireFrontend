// // import { usersAPI } from './userAPI'
// // import { Toaster } from 'sonner'

// // function UserTable() {
  

// //     const { data: usersData, isLoading } = usersAPI.useGetUsersQuery()
// //     console.log(usersData)
// //     const [deleteUser, {  data: deletemsg }] = usersAPI.useDeleteUserMutation()
    
// //     const handleDelete = async (id: number) => {
// //         await deleteUser(id).unwrap()
        

// //     }
// //     console.log(deletemsg)

// //     return (
// //         <>
// //             <Toaster
// //                 toastOptions={{
// //                     classNames: {
// //                         error: 'bg-red-400',
// //                         success: 'text-green-400',
// //                         warning: 'text-yellow-400',
// //                         info: 'bg-blue-400',
// //                     },
// //                 }} />
// //             <div className="overflow-x-auto text-base-content bg-blue-100 rounded-lg p-4">
// //                 <h1 className='text-xl my-4'>Users Data</h1>

// //                 <table className="table table-xs">
// //                     <thead>
// //                         <tr>
// //                             <th>id</th>
// //                             <th>full_name</th>
// //                             <th>email</th>
// //                             <th>phone</th>
// //                             <th>address</th>
                          
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {
// //                             isLoading ? (<tr><td colSpan={6}>Loading...</td></tr>) : 
// //                                            (

// //                                     usersData && usersData.map((user:any, index:number) => (
                                       
// //                                         <tr key={index}>
// //                                             <th>{user.user_id}</th>
// //                                             <td >{user.full_name}</td>
// //                                             <td>{user.email}</td>
// //                                             <td>{user.contact_phone}</td>
// //                                             <td>{user.adress}</td>
// //                                             <td className='block'>
// //                                                 <button className='btn btn-sm btn-outline btn-info text-white'>update</button>
// //                                                 <button className='btn btn-sm btn-outline btn-warning' onClick={() => handleDelete(user.user_id)}>Delete</button>
// //                                             </td>
// //                                         </tr>
                                        
// //                                     ))
                                

// //                             )
// //                         }
// //                     </tbody>
// //                     <tfoot>
// //                         <tr><td colSpan={6}>{usersData ? `${usersData.length} records` : '0 records'}</td></tr> {/* Dynamic record count */}
// //                     </tfoot>
// //                 </table>
// //             </div>
// //         </>

// //     )
// // }

// // export default UserTable
// import  { useState } from 'react';
// import { usersAPI,TUser } from './userAPI';
// import { Toaster, toast } from 'sonner';

// function UserTable() {
//   const { data: usersData, isLoading } = usersAPI.useGetUsersQuery();
//   const [deleteUser] = usersAPI.useDeleteUserMutation();
//   const [updateUser] = usersAPI.useUpdateUserMutation();

//   const [editUser, setEditUser] = useState<TUser | null>(null);
//   const [newRole, setNewRole] = useState<string>('');

//   const handleDelete = async (id: number) => {
//     await deleteUser(id).unwrap();
//     toast.success('User deleted successfully');
//   };

//   const handleEdit = (user: TUser) => {
//     setEditUser(user);
//     setNewRole(user.role);
//   };

//   const handleUpdate = async () => {
//     if (editUser) {
//       await updateUser({ ...editUser, role: newRole }).unwrap();
//       toast.success('User role updated successfully');
//       setEditUser(null);
//     }
//   };

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
//       <div className="overflow-x-auto text-base-content bg-blue-100 rounded-lg p-4">
//         <h1 className="text-xl my-4">Users Data</h1>
//         <table className="table table-xs">
//           <thead>
//             <tr>
//               <th>id</th>
//               <th>full_name</th>
//               <th>email</th>
//               <th>phone</th>
//               <th>address</th>
//               <th>actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {isLoading ? (
//               <tr>
//                 <td colSpan={6}>Loading...</td>
//               </tr>
//             ) : (
//               usersData &&
//               usersData.map((user) => (
//                 <tr key={user.user_id}>
//                   <th>{user.user_id}</th>
//                   <td>{user.full_name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.contact_phone}</td>
//                   <td>{user.adress}</td>
//                   <td className="block">
//                     <button
//                       className="btn btn-sm btn-outline btn-info text-white"
//                       onClick={() => handleEdit(user)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-outline btn-warning"
//                       onClick={() => handleDelete(user.user_id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan={6}>
//                 {usersData ? `${usersData.length} records` : '0 records'}
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>

//       {editUser && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-md w-1/3">
//             <h2 className="text-2xl mb-4">Edit User Role</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 New Role
//               </label>
//               <input
//                 type="text"
//                 value={newRole}
//                 onChange={(e) => setNewRole(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <div className="flex justify-end space-x-4">
//               <button
//                 className="btn btn-sm btn-outline btn-info text-white"
//                 onClick={handleUpdate}
//               >
//                 Update
//               </button>
//               <button
//                 className="btn btn-sm btn-outline btn-warning"
//                 onClick={() => setEditUser(null)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default UserTable;
import  { useState } from 'react';
import { TUser, usersAPI } from './userAPI';
import { Toaster, toast } from 'sonner';

function UserTable() {
  const { data: usersData, isLoading } = usersAPI.useGetUsersQuery();
  const [deleteUser] = usersAPI.useDeleteUserMutation();
  const [updateUser] = usersAPI.useUpdateUserMutation();

  const [editUser, setEditUser] = useState<any>(null);
  const [newRole, setNewRole] = useState<string>('');

  const handleDelete = async (id: number) => {
    await deleteUser(id).unwrap();
    toast.success('User deleted successfully');
  };

  const handleEdit = (user: TUser) => {
    setEditUser(user);
    setNewRole(user.role);
    
  };

  const handleUpdate = async () => {
    if (editUser) {
      const userId = localStorage.getItem('userid'); // Get user_id from local storage

      const updatePayload = {
        ...editUser,
        userid: userId, // Use the user_id from local storage
        role: newRole,
      };
      console.log(newRole)
     
      console.log('Updating user with payload:', updatePayload);

      try {
        await updateUser(updatePayload).unwrap();
        toast.success('User role updated successfully');
        setEditUser(null);
      } catch (error) {
        console.log(newRole)
        console.error('Failed to update user:', error);
        toast.error('Failed to update user');
      }
    }
  };

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
        <h1 className="text-xl my-4">Users Data</h1>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>id</th>
              <th>full_name</th>
              <th>email</th>
              <th>phone</th>
              <th>address</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6}>Loading...</td>
              </tr>
            ) : (
              usersData &&
              usersData.map((user: any) => (
                <tr key={user.user_id}>
                  <th>{user.user_id}</th>
                  <td>{user.full_name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact_phone}</td>
                  <td>{user.address}</td>
                  <td className="block">
                    <button
                      className="btn btn-sm btn-outline btn-info text-white"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline btn-warning"
                      onClick={() => handleDelete(user.user_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>
                {usersData ? `${usersData.length} records` : '0 records'}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {editUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-2xl mb-4">Edit User Role</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                New Role
              </label>
              <input
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="btn btn-sm btn-outline btn-info text-white"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="btn btn-sm btn-outline btn-warning"
                onClick={() => setEditUser(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserTable;
