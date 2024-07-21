
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TUbook {
    
   user_id:number,
   booking_status:string,
   total_amount:string,
   booking_date:string,
   return_date:string,
   booking_id:number

}

export const bookingAPI = createApi({
    reducerPath: 'bookingAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000',
       prepareHeaders:(headers)=>{
           const token = localStorage.getItem('token');
           if (token){
               headers.set('Authorization',`${token}`)
           }
           return headers;
    }
 }),'tagTypes':['getBookings'],
    
    
    endpoints: (builder) => ({
        getBook: builder.query<TUbook[], void> ({ query: () => 'book',
            providesTags: ['getBookings'],
         }),
        createBook: builder.mutation<TUbook,Partial<TUbook>>({
            query: (newUser) => ({
                url: 'book',
                method: 'POST',
                body: newUser,
                providesTags: ['Book'],
            }),
            invalidatesTags: ['getBookings'],
        }),
        updateBook: builder.mutation<TUbook,Partial<TUbook>>({
            query: ({ booking_id, ...rest }) => ({
                url: `book/${booking_id}`,
                method: 'PUT',
                body: rest,
                providesTags: ['updateUser'],
            }),
            invalidatesTags: ['getBookings'],
        }),
        deleteBook: builder.mutation<{success: boolean; id:number}, number>({
            query: (id) => ({
                url: `book/${id}`,
                method: 'DELETE',
                providesTags: ['deletebook'],
            }),
            invalidatesTags: ['getBookings'],
        }),
    }),
});
