
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    user_id: number;
    full_name: string;
    email: string;
    token: string; 
    password:string
}


export const loginAPI = createApi({
    reducerPath: 'userLoginAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://vehiclehiremanagement-system.onrender.com' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

