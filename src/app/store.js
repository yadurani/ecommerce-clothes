import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { configurePersist } from './persist';
import rootReducers from './reducer';

const persists = configurePersist(rootReducers);

const store = configureStore({
  reducer: persists.reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
})
});

export default store;

export const persistor = persistStore(store);