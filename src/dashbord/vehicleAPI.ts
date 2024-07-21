
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface specs {
    manufacture:string,
    model:string,
    engine_capacity:string,
    fuel_type:string,
    seating_capacity:string,
    year:string
}

export interface TUvehicle{
    vehicle_id:number,
    vehicleSpecs_id:number,
    avalilability:string,
    vehicle: specs;
    img_url:string;
    
}
// Define the API slice
export const vehicleAPI = createApi({
    reducerPath: 'vehicleAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000',
       prepareHeaders:(headers)=>{
           const token = localStorage.getItem('token');
           if (token){
               headers.set('Authorization',`${token}`)
           }
           return headers;
    }
 }),
    'tagTypes':['getVehicle'],
    
    endpoints: (builder) => ({
        getVehicles: builder.query<TUvehicle[], void> ({ query: () => 'vehicle',
            providesTags: ['getVehicle'],
         }),
        createVehicle: builder.mutation<TUvehicle,Partial<TUvehicle>>({
            query: (newUser) => ({
                url: 'vehicle',
                method: 'POST',
                body: newUser,
                providesTags: ['createvehicle'],
            }),
            invalidatesTags: ['getVehicle'],
        }),
        updateVehicle: builder.mutation<TUvehicle,Partial<TUvehicle>>({
            query: ({ vehicle_id, ...rest }) => ({
                url: `user/${vehicle_id}`,
                method: 'PUT',
                body: rest,
                providesTags: ['updatevehicle'],
            }),
            invalidatesTags: ['getVehicle'],
        }),
        deleteVehicle: builder.mutation<{success: boolean; id:number}, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
                providesTags: ['deleteUser'],
            }),
            invalidatesTags: ['getVehicle'],
        }),
    }),
});


export const { useGetVehiclesQuery, useCreateVehicleMutation, useUpdateVehicleMutation, useDeleteVehicleMutation } = vehicleAPI;
