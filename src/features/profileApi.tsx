// profileApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Vehicle {
  id: string;
  model: string;
  date: string;
}

interface Ticket {
  id: string;
  issue: string;
  status: string;
}

interface Profile {
  name: string;
  id: string;
  email: string;
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, void>({
      query: () => 'users/1', // Simulate fetching a single user
    }),
    bookVehicle: builder.mutation<Vehicle, Partial<Vehicle>>({
      query: (vehicle) => ({
        url: 'vehicles',
        method: 'POST',
        body: vehicle,
      }),
    }),
    getTickets: builder.query<Ticket[], void>({
      query: () => 'tickets',
    }),
  }),
});


