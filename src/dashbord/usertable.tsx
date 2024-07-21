import { usersAPI } from './userAPI'
import { Toaster, toast } from 'sonner'

function UserTable() {
  

    const { data: usersData, error, isLoading, isError } = usersAPI.useGetUsersQuery()
    console.log(usersData)
    const [deleteUser, { isLoading: isDeleting, data: deletemsg }] = usersAPI.useDeleteUserMutation()
    
    const handleDelete = async (id: number) => {
        await deleteUser(id).unwrap()
        // toast.warning(deletemsg?)

    }
    console.log(deletemsg)

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
                }} />
            <div className="overflow-x-auto text-base-content bg-blue-100 rounded-lg p-4">
                <h1 className='text-xl my-4'>Users Data</h1>

                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>full_name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>address</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isLoading ? (<tr><td colSpan={6}>Loading...</td></tr>) : 
                                           (

                                    usersData && usersData.map((user:any, index:number) => (
                                       
                                        <tr key={index}>
                                            <th>{user.user_id}</th>
                                            <td >{user.full_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.contact_phone}</td>
                                            <td>{user.address}</td>
                                            <td className='flex gap-1'>
                                                <button className='btn btn-sm btn-outline btn-info text-white'>update</button>
                                                <button className='btn btn-sm btn-outline btn-warning' onClick={() => handleDelete(user.user_id)}>Delete</button>
                                            </td>
                                        </tr>
                                        
                                    ))
                                

                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr><td colSpan={6}>{usersData ? `${usersData.length} records` : '0 records'}</td></tr> {/* Dynamic record count */}
                    </tfoot>
                </table>
            </div>
        </>

    )
}

export default UserTable
