import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface User {
    role: string;
    full_name: string;
    contact_phone: string;
    user_id: number;
    email:string;
    password:string
  }
  
  export interface LoginResponse {
    token: string;
    user: User;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};
const userSlice = createSlice({
  
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
