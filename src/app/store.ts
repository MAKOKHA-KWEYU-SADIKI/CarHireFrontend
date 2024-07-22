import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersAPI } from '../dashbord/userAPI';
import { loginAPI } from '../features/userloginApi';
import userReducer from '../features/userSlice';
import { profileAPI } from '../dashbord/profileAPI';
import { vehicleAPI } from '../dashbord/vehicleAPI';
import { bookingAPI } from '../dashbord/bookingAPI';
import { fleetAPI } from '../fleet/fleetAPI';
import { customerAPI } from '../customer/customerAPI';

// Define persistConfig
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userProfile'], // Ensure this matches your reducer names
};

// Apply persistence to userReducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Configure the store
const store = configureStore({
  reducer: {
    user:userReducer,
    userProfile: persistedReducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [vehicleAPI.reducerPath]: vehicleAPI.reducer,
    [bookingAPI.reducerPath]: bookingAPI.reducer,
    [profileAPI.reducerPath]: profileAPI.reducer,
    [fleetAPI.reducerPath]: fleetAPI.reducer,
    [customerAPI.reducerPath]: customerAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      usersAPI.middleware,
      loginAPI.middleware,
      vehicleAPI.middleware,
      bookingAPI.middleware,
      profileAPI.middleware,
      fleetAPI.middleware,
      customerAPI.middleware
    ),
});

// Create the persisted store
const persistedStore = persistStore(store);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export store and persistedStore
export { store, persistedStore };
