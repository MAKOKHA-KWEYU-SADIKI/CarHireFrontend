// store.ts
import { configureStore, combineReducers, EnhancedStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import profileReducer, { ProfileState } from './profileslice';

// Redux persist configuration
const persistConfig = {
  key: 'root', // root key for the persisted state
  storage: storage, // storage engine
  whitelist: ['profile'], // only 'profile' will be persisted
};

const rootReducer = combineReducers({
  profile: profileReducer,
  // Add other reducers here if any
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create Redux store
export const store: EnhancedStore<
  {
    profile: ProfileState;
  } & PersistPartial,
  any,
  []
> = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
