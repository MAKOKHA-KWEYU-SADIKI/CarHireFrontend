




import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TUser {
    user_id: number;
    full_name: string;
    role:string;
    email:string;
    adress:string;
    contact_phone: string;

}
// interface TUvehicle{
//     vehicle_id:number,
//     vehicleSpecs_id:number,
//     availability:string,
//     manufacture:string,
//     model:string,
//     engine_capacity:string,
//     fuel_type:string,
//     seating_capacity:string,
//     year:string
// }
// Define the API slice
export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    'tagTypes':['getUser'],
    
    endpoints: (builder) => ({
        getUsers: builder.query<TUser[], void> ({ query: () => 'user',
            providesTags: ['getUser'],
         }),
        createUser: builder.mutation<TUser,Partial<TUser>>({
            query: (newUser) => ({
                url: 'users',
                method: 'POST',
                body: newUser,
                providesTags: ['createUser'],
            }),
            invalidatesTags: ['getUser'],
        }),
        updateUser: builder.mutation<TUser,Partial<TUser>>({
            query: ({ user_id, ...rest }) => ({
                url: `user/${user_id}`,
                method: 'PUT',
                body: rest,
                providesTags: ['updateUser'],
            }),
            invalidatesTags: ['getUser'],
        }),
        deleteUser: builder.mutation<TUser,Number>({
            query: (id) => ({
                url: `user/${id}`,
                method: 'DELETE',
                providesTags: ['deleteUser'],
            }),
            invalidatesTags: ['getUser'],
        }),
    }),
});


