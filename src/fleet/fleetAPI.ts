
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TUfleet{
    vehicle_id:number,
   acquisition_date:string
    depreciation_rate:string,
    current_value:string,
    maintainance_cost:string,
    status:string,
    fleet_id:number
 
 
}
export const fleetAPI = createApi({
    reducerPath: 'fleetAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://vehiclehiremanagement-system.onrender.com',
       prepareHeaders:(headers)=>{
           const token = localStorage.getItem('token');
           console.log(token)
           if (token){
               headers.set('Authorization',`${token}`)
           }
           return headers;
           
    }
 }),
    'tagTypes':['getfleet'],
    
    endpoints: (builder) => ({
        getfleet: builder.query<TUfleet[],void> ({ query: () => 'manage',
            providesTags: ['getfleet'],
         }),
         createfleet: builder.mutation<TUfleet, Partial<TUfleet>>({
            query: (rest) => ({
              url: 'manage',
              method: 'POST',
              body: rest,
            }),
            invalidatesTags: ['getfleet'],
          }),

        updatefleet: builder.mutation<TUfleet,Partial<TUfleet>>({
            query: ({ fleet_id, ...rest }) => ({
                url: `manage/${fleet_id}`,
                method: 'PUT',
                body: rest,
                providesTags: ['updatefleet'],
            }),
            invalidatesTags: ['getfleet'],
        }),
        deletefleet: builder.mutation<{success: boolean; fleet_id:number}, number>({
            query: (fleet_id) => ({
                url: `manage/${fleet_id}`,
                method: 'DELETE',
                providesTags: ['deletefleet'],
            }),
            invalidatesTags: ['getfleet'],
        }),
    }),
});




