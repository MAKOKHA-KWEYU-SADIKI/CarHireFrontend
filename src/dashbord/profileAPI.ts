
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TUprofile{
    userId:number,
    full_name:string,
    adress:string,
    contact_phone:string,
    email:string,
    role:string,
 
}
export const profileAPI = createApi({
    reducerPath: 'profileAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://vehiclehiremanagement-system.onrender.com',
       prepareHeaders:(headers)=>{
           const token = localStorage.getItem('token');
           if (token){
               headers.set('Authorization',`${token}`)
           }
           return headers;
    }
 }),
    'tagTypes':['getProfile'],
    
    endpoints: (builder) => ({
        getProfile: builder.query<TUprofile,number> ({ query: (userId) => `user/${userId}`,
            providesTags: ['getProfile'],
         }),


        updateProfile: builder.mutation<TUprofile,Partial<TUprofile>>({
            query: ({ userId, ...rest }) => ({
                url: `user/${userId}`,
                method: 'PUT',
                body: rest,
                providesTags: ['updateProfile'],
            }),
            invalidatesTags: ['getProfile'],
        }),
        deleteProfile: builder.mutation<{success: boolean; user_id:number}, number>({
            query: (user_id) => ({
                url: `user${user_id}`,
                method: 'DELETE',
                providesTags: ['deleteProfile'],
            }),
            invalidatesTags: ['getProfile'],
        }),
    }),
});


