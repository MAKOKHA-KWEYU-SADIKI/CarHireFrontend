
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export interface TUcustomer{
//   ticket_id:number,
//   user_id:number,
//   subject:Text,
//   description:Text,
//   status:Text

 
 
// }
// export const customerAPI = createApi({
//     reducerPath: 'customeraApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000',
//        prepareHeaders:(headers)=>{
//            const token = localStorage.getItem('token');
//            console.log(token)
//            if (token){
//                headers.set('Authorization',`${token}`)
//            }
//            return headers;
           
//     }
//  }),
//     'tagTypes':['getcustomer'],
    
//     endpoints: (builder) => ({
//         getcustomer: builder.query<TUcustomer[],void> ({ query: () => 'manage',
//             providesTags: ['getcustomer'],
//          }),


//         updatecustomer: builder.mutation<TUcustomer,Partial<TUcustomer>>({
//             query: ({ ticket_id, ...rest }) => ({
//                 url: `customer/${ticket_id}`,
//                 method: 'PUT',
//                 body: rest,
//                 providesTags: ['updatecustomer'],
//             }),
//             invalidatesTags: ['getcustomer'],
//         }),
//         createsupport: builder.mutation<TUcustomer,Text>({
//             query: (rest) => ({
//               url: 'customer',
//               method: 'POST',
//               body: rest,
//             }),
//             invalidatesTags: ['getcustomer'],
//           }),
//         deletecustomer: builder.mutation<{success: boolean; fleet_id:number}, number>({
//             query: (fleet_id) => ({
//                 url: `customer/${fleet_id}`,
//                 method: 'DELETE',
//                 providesTags: ['deletecustomer'],
//             }),
//             invalidatesTags: ['getcustomer'],
//         }),
//     }),
// });
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TUcustomer {
  ticket_id: number;
  user_id: number;
  subject: string;
  description: string;
  status: string;
}

export const customerAPI = createApi({
  reducerPath: 'customeraApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['getcustomer'],
  endpoints: (builder) => ({
    getcustomer: builder.query<TUcustomer[], void>({
      query: () => 'customer',
      providesTags: ['getcustomer'],
    }),
    updatecustomer: builder.mutation<TUcustomer, Partial<TUcustomer>>({
      query: ({ ticket_id, ...rest }) => ({
        url: `customer/${ticket_id}`,
        method: 'PUT',
        body: rest,
        providesTags: ['updatecustomer'],
      }),
      invalidatesTags: ['getcustomer'],
    }),
    createCustomer: builder.mutation<TUcustomer, Partial<TUcustomer>>({
      query: (rest) => ({
        url: 'customer',
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['getcustomer'],
    }),
    deletecustomer: builder.mutation<{ success: boolean; fleet_id: number }, number>({
      query: (fleet_id) => ({
        url: `customer/${fleet_id}`,
        method: 'DELETE',
        providesTags: ['deletecustomer'],
      }),
      invalidatesTags: ['getcustomer'],
    }),
  }),
});





