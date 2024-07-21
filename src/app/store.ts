
import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], 
};
const rootReducer = combineReducers({
  [usersAPI.reducerPath]: usersAPI.reducer,
  [loginAPI.reducerPath]: loginAPI.reducer,
  [vehicleAPI.reducerPath]:vehicleAPI.reducer,
  [bookingAPI.reducerPath]:bookingAPI.reducer,
  [profileAPI.reducerPath]:profileAPI.reducer,
  [fleetAPI.reducerPath]:fleetAPI.reducer,
  [customerAPI.reducerPath]:customerAPI.reducer,
  
  user: userReducer, 

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(usersAPI.middleware, loginAPI.middleware,customerAPI.middleware,vehicleAPI.middleware,bookingAPI.middleware,fleetAPI.middleware,profileAPI.middleware),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
