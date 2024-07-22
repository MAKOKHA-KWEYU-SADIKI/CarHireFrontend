
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface specs {
    manufacture:string,
    model:string,
    engine_capacity:string,
    fuel_type:string,
    seating_capacity:string,
    vehicle_id:number,
    year:string
}

export interface TUvehicle{
    vehicle_id:number,
    vehicleSpecs_id:number,
    avalilability:string,
    vehicle: specs;
    img_url:string;
    
}

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
                url: `specs/${vehicle_id}`,
                method: 'PUT',
                body: rest,
                providesTags: ['updatevehicle'],
            }),
            invalidatesTags: ['getVehicle'],
        }),
        deleteVehicle: builder.mutation<{success: boolean; id:number}, number>({
            query: (id) => ({
                url: `vehicle/${id}`,
                method: 'DELETE',
                providesTags: ['deleteUser'],
            }),
            invalidatesTags: ['getVehicle'],
        }),
    }),
});

